import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";
import qs from 'querystring'


export async function GET(req:NextApiRequest, res:NextApiResponse) {
    try {
        const query = req.url?.split('?')[1]
        const x = qs.parse(query as string)

        const email = x.email
        console.log(email)

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