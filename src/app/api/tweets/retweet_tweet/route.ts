import clientPromise from "@/lib/mongodb";
import { InsertedLike } from "@/lib/types/like";
import { InsertRetweetToDatabase } from "@/lib/types/retweet";
import { FullCommentData, FullTweetData } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import z from 'zod';

export async function POST(req:Request) {
    try {   
        const body = await req.json()

        const schema = z.object({
            userId:z.string(),
            parentTweet:z.string()
        })

        const validate_body = schema.safeParse(body)

        if(!validate_body.success) {
            return NextResponse.json({error:'Invalid Request'})
        }

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)

        const {userId, parentTweet} = validate_body.data
      
        const retweet = await db.collection<InsertRetweetToDatabase>('retweets').insertOne({
            userId,
            parentTweet
        })

        const updateUser = () => db.collection<FullUserDocument>('users').updateOne({
            _id:new ObjectId(parentTweet)
        }, {$push:{retweets:retweet.insertedId.toString()}})

        const updateTweet = () => db.collection<FullTweetData>('tweets').updateOne({
            _id:new ObjectId(parentTweet)
        },{$inc:{retweets:1}})

        await Promise.allSettled([
            updateUser(),
            updateTweet()
        ]) as unknown as {status:'fullfiled' | 'rejected',value:{insertedId:ObjectId}}[]

        return NextResponse.json({ok:true})

    } catch(e) {
        console.log('error on inserting like_tweet',e)
        return NextResponse.error()
    }
}