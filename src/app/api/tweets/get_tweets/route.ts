export const dynamic = "force-dynamic";
import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import { FullTweetData, FullTweetDataForClient } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,res:NextApiResponse) {
  try {
      
        const parsed = url_parse(req.url as string)

        const userId = parsed.userId as string

        if(!userId || typeof userId !== 'string') return NextResponse.json({
          ok:true,
          data: {
              tweets:[],
              liked_tweets:[]
          }
        });

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)
        
        const user = await db.collection<FullUserDocument>('users')
        .findOne({ _id: new ObjectId(userId) });

        if(!user?.following) {
          return NextResponse.json({
            ok:true,
            data: {
                tweets:[],
                liked_tweets:[]
            }
          });
        }

        const following = user.following;
        
        const tweets = await db.collection('tweets').aggregate([
            // query to match several conditions
          { $match: { $or: [
            // every tweet that has the userId field 
            // as the current user, and all the users he follows.
            { userId: { $in: [userId, ...following] } },
            // every retweet that the user has made
            { retweets: userId }
          ] } },
            //   sorting by creation to get a timeline correctly
          { $sort: { createdAt: -1 } }
        ]).limit(15).toArray();

        const tweets_ids = [...tweets.map(t => t._id.toString())]

        const liked_tweets = await db.collection<FullLikeData>('likes')
        .find({userId,parentTweet:{$in:tweets_ids}}).toArray()

        const only_tweets_ids:string[] = [...liked_tweets.map(t => t.parentTweet)]

        const updated_tweets_array = tweets.map((obj) => {
          if (only_tweets_ids.includes(obj._id.toString())) {
            return { ...obj, isUserLiked: true };
          } else {
            return obj;
          }
        });

        return NextResponse.json({
            ok:true,
            data: {
              tweets:updated_tweets_array as unknown as FullTweetDataForClient[]
            }
        });

    } catch(e) {
        return NextResponse.error()
    }
}