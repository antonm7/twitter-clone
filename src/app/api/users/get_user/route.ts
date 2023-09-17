import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const parsed = url_parse(req.url as string)
        const username = parsed.username

        if(!username || typeof username !== 'string') throw new Error()

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)
        const user = await db.collection<FullUserDocument>('users').findOne({username})

        return NextResponse.json({
            username:user?.username,
            name:user?.name
        })

    } catch(e) {
        return NextResponse.error()
    }
}