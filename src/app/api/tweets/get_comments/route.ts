import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import type { FullCommentData } from "@/lib/types/tweets";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try {
        const parsed = url_parse(req.url as string)
        const parent_tweet = parsed.parentTweet

        const db = await connectToDatabase()

        if(!parent_tweet || typeof parent_tweet !== 'string') return NextResponse.error()

        const comments = await db.collection<FullCommentData>('comments')
        .find({parent_tweet}).limit(10).sort({createdAt: -1 }).toArray()

        const comments_ids = [...comments.map(t => t._id.toString())]

        const liked_comments = parsed.userId ? await db.collection<FullLikeData>('likes')
        .find({userId:parsed.userId,parentTweet:{$in:comments_ids}}).toArray() : []

        const only_liked_comments_ids:string[] = liked_comments.length ? [...liked_comments.map(t => t.parentTweet)] : []

        return NextResponse.json({
            ok:true,comments,
            liked_comments:only_liked_comments_ids
        })

    } catch(e) {
        console.log('error on get comments request', e)
        return NextResponse.error()
    }
}