export const dynamic = "force-dynamic";
import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import { FullTweetData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,res:NextApiResponse) {
    try {
        const parsed = url_parse(req.url as string)

        const userId = parsed.userId as string | undefined
        const tweetId = parsed.tweetId as string

        if(!tweetId || typeof tweetId !== 'string') {
            throw new Error('Please provide tweetId')
        } 

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)
        
        const tweet = await db.collection<FullTweetData>('tweets')
        .findOne({_id:new ObjectId(tweetId)})

        let user_liked:boolean = false

        if(userId) {
            const is_user_liked = await db.collection<FullLikeData>('likes').findOne({
                userId,
                parentTweet:tweetId
            })
            if(is_user_liked) {
                user_liked = true
            }
        }

        return NextResponse.json({
            ok:true,
            data: {
                tweet_data:tweet as unknown as FullTweetData,
                user_liked
            }
        });

    } catch(e) {
        return NextResponse.error()
    }
}