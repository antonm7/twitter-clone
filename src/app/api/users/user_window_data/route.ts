import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    try {
        const parsed = url_parse(req.url as string)
        const username = parsed.username

        const db = await connectToDatabase();
        const user = await db.collection<FullUserDocument>('users').findOne({username})
        
        return NextResponse.json({data: {
            username:user?.username,
            name:user?.name,
            bio:user?.bio,
            img:user?.profile_image,
            following:user?.following,
            followers:user?.followers
        }
        })
    } catch(e) {
        return NextResponse.error()
    }
}