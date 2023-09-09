import { url_parse } from "@/lib/helpers";
import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest) {
    try {
        const parsed = url_parse(req.url as string)
        const email = parsed.email

        if(!email || typeof email !== 'string') throw new Error()

        const db = await connectToDatabase();
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