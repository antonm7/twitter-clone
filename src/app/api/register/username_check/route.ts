import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    try {
        const parsed = url_parse(req.url as string)
        const username = parsed.username

        const db = await connectToDatabase();
        const exists = await db.collection<FullUserDocument>('users').findOne({username})

        if(exists) {
            return NextResponse.json({exists:true})
        } else {
            return NextResponse.json({exists:false})
        }
    } catch(e) {
        return NextResponse.error()
    }
}