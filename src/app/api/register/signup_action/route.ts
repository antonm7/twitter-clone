import { connectToDatabase } from "@/lib/mongodb";
import { FullUserDocument } from "@/lib/types/user";
import { hash } from "bcrypt";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const config = {
    api: { 
      bodyParser: true,
    },
  };

export async function POST(req:Request, res:NextApiResponse) {
    try {
        const {email, password,name, username,profile_image}:
        {email:string, password:string,name:string, username:string,profile_image?:string} = await req.json()

        const db = await connectToDatabase()

        await db.collection('users').insertOne({
            email,
            password:await hash(password, 8),
            username,
            name,
            bio:'',
            following:[],
            followers:[],
            joined_at:[],
            profile_image:profile_image ? profile_image : '',
            background_image:'',
            tweets:[],
            comments:[],
            likes:[],
            bookmark:[],
            retweets:[]
        })

        return NextResponse.json({user:{username, name, email}})
        
    } catch(e) {
        console.log(e)
        NextResponse.error()
    }

}

