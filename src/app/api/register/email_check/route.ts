export const dynamic = "force-dynamic";
import { url_parse } from "@/lib/helpers";
import clientPromise from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import {NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    try {
        const parsed = url_parse(req.url as string)
        const email = parsed.email

        if(!email || typeof email !== 'string') throw new Error()

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)
        const exists = await db.collection<FullUserDocument>('users').findOne({email})

        if(exists) {
            return NextResponse.json({exists:true})
        } else {
            return NextResponse.json({exists:false})
        }
    } catch(e) {
        return NextResponse.error()
    }
}