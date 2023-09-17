export const dynamic = 'force-dynamic'
import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { FullLikeData } from "@/lib/types/like";
import type { FullCommentData } from "@/lib/types/tweets";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,res:NextApiResponse) {
    try {
        const parsed = url_parse(req.url as string)

        const parent_tweet = parsed.parentTweet
        const userId = parsed.userId

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)

        if(!parent_tweet || typeof parent_tweet !== 'string') return NextResponse.error()

        const liked = () => db.collection<FullLikeData>('likes').findOne({userId})
        const retweeted = () => db.collection<FullCommentData>('comments').findOne({userId})

        const stats = await Promise.allSettled([
            liked(),
            retweeted()
        ]) as unknown as {status:'fullfiled' | 'rejected',value:number}[]
        
        return NextResponse.json({ok:true,data:{
            isUserLiked:stats[0].value ? true : false,
            isUserRetweeted:false
        }})

    } catch(e) {
        console.log('error on get comments request', e)
        return NextResponse.error()
    }
}