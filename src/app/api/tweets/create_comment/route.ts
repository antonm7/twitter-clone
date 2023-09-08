import { connectToDatabase } from "@/lib/mongodb";
import { FullTweetData, InsertedComment, InsertedTweet } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { z } from 'zod';

export async function POST(req:Request,res:NextApiResponse) {
    try {
        const body = await req.json()

        const schema  = z.object({
            userId:z.string(),
            parentTweet:z.string(),
            text:z.string().max(124).min(1)
        })

        
        const validate_result = schema.safeParse(body)
        
        if(!validate_result.success) {
            return NextResponse.json({ error: 'Invalid Request' }, { status: 400 })
        }

        const db = await connectToDatabase()
        
        const {userId, text, parentTweet } = validate_result.data

        const user = await db.collection<FullUserDocument>('users')
        .findOne({_id: new ObjectId(userId)})

        const comment_object:InsertedComment = {
            text,
            likes: 0,
            retweets: 0,
            userId,
            user_username: user?.username!,
            user_img: user?.profile_image!,
            user_name: user?.name!,
            createdAt: new Date(),
            parent_tweet: parentTweet,
            comments:0,
            shares:0,
            views:0
        }

        const inserted_comment = await db.collection<InsertedComment>('comments')
        .insertOne(comment_object)

        const updated_user = await db.collection<FullUserDocument>('users')
        .updateOne({_id:new ObjectId(userId)},{$push:
            {comments:JSON.stringify(inserted_comment.insertedId)}})

        // updating parent tweet (inc) number of comments
        await db.collection<FullTweetData>('tweets')
        .updateOne({_id:new ObjectId(parentTweet)},{$inc:{comments:1}})

        const inserted_comment_data = await db.collection<FullTweetData>('tweets')
        .findOne({_id: new ObjectId(inserted_comment.insertedId)})

        if(updated_user.acknowledged) {
            return NextResponse.json({ok:true,tweet:inserted_comment_data},{status:201})
        } else {
            throw new Error('User did not updated')
        }
        
    } catch(e) {
        console.log('error on create_tweet Post request', e)
        return NextResponse.error()
    }
}