import { connectToDatabase } from "@/lib/mongodb";
import { FullTweetData, InsertedTweet } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { z } from 'zod';


export async function POST(req:Request,res:NextApiResponse) {
    try {
        const body = await req.json()
        console.log(body)
        const schema  = z.object({
            userId:z.string(),
            text:z.string().max(124).min(1)
        })

        const validate_result = schema.safeParse(body)

        if(!validate_result.success) {
            return NextResponse.json({ error: 'Invalid Request' }, { status: 400 })
        }

        const db = await connectToDatabase()
        
        const {userId, text } = validate_result.data

        const user = await db.collection<FullUserDocument>('users')
        .findOne({_id: new ObjectId(userId)})

        const tweet_object:InsertedTweet = {
            text,
            likes: [],
            dislikes: [],
            retweets: [],
            userId,
            user_username:user?.username!,
            user_img:user?.profile_image!,
            user_name:user?.name!,
            createdAt:new Date(),
            comments:[]
        }

        const inserted_tweet = await db.collection('tweets').insertOne(tweet_object)

        const updated_user = await db.collection<FullUserDocument>('users')
        .updateOne({_id:new ObjectId(userId)},{$pull:{tweets:JSON.stringify(inserted_tweet.insertedId)}})

        const inserted_tweet_data = await db.collection<FullTweetData>('tweets')
        .findOne({_id: new ObjectId(inserted_tweet.insertedId)})

        if(updated_user.acknowledged) {
            return NextResponse.json({ok:true,tweet:inserted_tweet_data},{status:201})
        } else {
            throw new Error('User did not updated')
        }


    } catch(e) {
        console.log('error on create_tweet Post request', e)
        return NextResponse.error()
    }
}