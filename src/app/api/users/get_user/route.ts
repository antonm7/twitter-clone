import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    try {
        console.log('request:',req)
        const parsed = url_parse(req.url as string)
        const username = parsed.username

        const db = await connectToDatabase();
        const user = await db.collection<FullUserDocument>('users').findOne({username})

        return NextResponse.json({
            username:user?.username,
            name:user?.name
        })
    } catch(e) {
        console.log('dsadsao0-32o1,e',e)
        return NextResponse.error()
    }
}