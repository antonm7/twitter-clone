import { connectToDatabase } from "@/lib/mongodb";
import { type FullUserDocument } from "@/lib/types/user";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    try {
        const username = req.query
        
        const db = await connectToDatabase();
        const exists = await db.collection<FullUserDocument>('users').findOne({username})
        
        if(exists) {
            NextResponse.json({exists:true})
        } else {
            NextResponse.json({exists:false})
        }
        
    } catch(e) {
        console.error('Unexpected Error', e)
        NextResponse.error()
    }
}