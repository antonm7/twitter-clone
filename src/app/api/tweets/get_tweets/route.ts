import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import { FullTweetData } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,res:NextApiResponse) {
    try {
        const parsed = url_parse(req.url as string)

        const userId = parsed.userId as string

        if(!userId || typeof userId !== 'string') return NextResponse.error()

        const db = await connectToDatabase()
        
        const user = await db.collection<FullUserDocument>('users')
        .findOne({ _id: new ObjectId(userId) });
        
        if(!user) throw new Error()

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

        return NextResponse.json({
            ok:true,
            data: {
                tweets:tweets as FullTweetData[],
                liked_tweets:only_tweets_ids as string[]
            }
        });

    } catch(e) {
        return NextResponse.error()
    }
}