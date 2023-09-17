import clientPromise from "@/lib/mongodb";
import { InsertedLike } from "@/lib/types/like";
import { FullCommentData } from "@/lib/types/tweets";
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
      
        const like = () => db.collection<InsertedLike>('likes').insertOne({
            userId,
            parentTweet
        })

        const updateTweetLikes = () => db.collection<FullCommentData>('tweets').updateOne({
            _id:new ObjectId(parentTweet)
        }, {$inc:{likes:1}})

        const like_methods = await Promise.allSettled([
            like(),
            updateTweetLikes()
        ]) as unknown as {status:'fullfiled' | 'rejected',value:{insertedId:ObjectId}}[]

        console.log(like_methods)

        return NextResponse.json({
            ok:true,
            likeId:like_methods[0].value.insertedId.toString()
        })

    } catch(e) {
        console.log('error on inserting like_tweet',e)
        return NextResponse.error()
    }
}