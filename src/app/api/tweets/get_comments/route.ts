import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import type { FullCommentData } from "@/lib/types/tweets";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,res:NextApiResponse) {
    try {
        console.log('dusiao783892hjkdsa')
        const parsed = url_parse(req.url as string)
        console.log('parsed data:',parsed)
        const parent_tweet = parsed.parentTweet

        const db = await connectToDatabase()

        if(!parent_tweet || typeof parent_tweet !== 'string') return NextResponse.error()

        const comments = await db.collection<FullCommentData>('comments')
        .find({parent_tweet}).toArray()
        
        return NextResponse.json({ok:true,comments})

    } catch(e) {
        console.log('error on get comments request', e)
        return NextResponse.error()
    }
}