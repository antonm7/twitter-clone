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
        const {email, password,name, username}:
        {email:string, password:string,name:string, username:string} = await req.json()

        // const validateEmail = (email: string): boolean => {
        //     const re =
        //       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //     return re.test(email)
        // }

        // if(!validateEmail(email)) {
        //     return NextResponse.json({error:'Please enter valid email'})
        // }

        // const validatePassword = /^[A-Za-z]\w{7,14}$/

        // if(!password.match(validatePassword)) {
        //     return NextResponse.json({error:'Please enter valid password'})
        // }

        // if(username.length < 6) {
        //     return NextResponse.json({error:'Username is too  short'})
        // }

        const db = await connectToDatabase()

        // const check_email =  await db.collection<FullUserDocument>('users').findOne({email})

        // if(check_email) {
        //     return NextResponse.json({error:'Email is already in use'})
        // }

        // const check_username = await db.collection<FullUserDocument>('users').findOne({username})

        // if(check_username) {
        //     return NextResponse.json({error:'Username is already in use'})
        // }

        await db.collection('users').insertOne({
            email,
            password:await hash(password, 8),
            username,
            name
        })

        return NextResponse.json({user:{username, name, email}})
        
    } catch(e) {
        console.log(e)
        NextResponse.error()
    }

}

