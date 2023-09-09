import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest) {
    try {
        const parsed = url_parse(req.url as string)
        const username = parsed.username

        if(!username || typeof username !== 'string') throw new Error()

        const db = await connectToDatabase();
        const user = await db.collection<FullUserDocument>('users').findOne({username})

        return NextResponse.json({
            username:user?.username,
            name:user?.name
        })

    } catch(e) {
        return NextResponse.error()
    }
}