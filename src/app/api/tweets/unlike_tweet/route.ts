import clientPromise from "@/lib/mongodb";
import { InsertedLike } from "@/lib/types/like";
import { FullCommentData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";
import type { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import z from 'zod';

export async function POST(req:NextRequest,res:NextApiResponse) {
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

        await Promise.allSettled([
            db.collection<InsertedLike>('likes').deleteOne({
                userId,
                parentTweet
            }),
            db.collection<FullCommentData>('tweets').updateOne({
                _id:new ObjectId(parentTweet)
            }, {$inc:{likes: -1}})
        ])

        return NextResponse.json({ok:true})
    } catch(e) {
        console.log('error on inserting like_tweet',e)
        return NextResponse.error()
    }
}