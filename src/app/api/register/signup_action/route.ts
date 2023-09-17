import clientPromise from "@/lib/mongodb";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

type reqBody = {
    email:string
    password:string
    name:string
    username:string
    profile_image?:string
}

export async function POST(req:Request) {
    try {
        const {email, password,name, username,profile_image}:reqBody = await req.json()

        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)

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
        NextResponse.error()
    }
}

