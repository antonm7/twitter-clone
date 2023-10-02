export const dynamic = "force-dynamic";
import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import { FullTweetData, FullTweetDataForClient } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface Values {
  [id:string]:{
    liked:boolean
    retweeted:boolean
  }
}

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
      // TODO:create parallal fetching
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

      const userData = await db.collection<FullUserDocument>('users')
      .findOne({_id:new ObjectId(userId)})

      // Following algorithm is going through the tweets array
      // and check what is a liked or retweeted tweet by the user
      // The big O notation of this algo is O(n).

      // object that stores the liked/retweeted tweet
      let values:Values = {}
      //updates liked tweets 
      for(let key of userData!.likes) {
        values[key] = {liked:true,retweeted:false}
      }
      // updates retweeted tweets
      for(let key of userData!.retweets) {
        values[key] = {liked:values[key].liked || false,retweeted:true}
      }
      // assign for each returned tweet, if the tweet is liked or retweeted
      // this specific loop is O(20).
      for(let key in tweets) {
        tweets[key] = {
          ...tweets[key],
          isUserLiked:values[tweets[key]._id]?.liked || false,
          isUserRetweeted:values[tweets[key]._id]?.retweeted || false
        }
      }

      return NextResponse.json({
        ok:true,
        data: {
          tweets:tweets as unknown as FullTweetDataForClient[]
        }
    });
  } catch(e) {
    console.log('error:',e)
      return NextResponse.error()
  }
}