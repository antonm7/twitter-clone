import { connectToDatabase } from "@/lib/mongodb";
import { FullUserDocument } from "@/lib/types/user";
import { hash } from "bcrypt";
import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    return NextResponse.json({data:'dsadsa'})
}

export async function POST(req:NextApiRequest, res:NextApiResponse) {
    try {
        const {email, password,name, username}:
        {email:string, password:string,name:string, username:string} = req.body

        const validateEmail = (email: string): boolean => {
            const re =
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        }

        if(!validateEmail(email)) {
            return res.status(200).send({error:'Please enter valid email'})
        }

        const validatePassword = /^[A-Za-z]\w{7,14}$/

        if(!password.match(validatePassword)) {
            return res.status(200).send({error:'Please enter valid password'})
        }

        if(username.length < 6) {
            return res.status(200).send({error:'Username is too short'})
        }

        const db = await connectToDatabase()

        const check_email =  await db.collection<FullUserDocument>('users').findOne({email})

        if(check_email) {
            return res.status(200).send({error:'Email is already in use'})
        }

        const check_username = await db.collection<FullUserDocument>('users').findOne({username})

        if(check_username) {
            return res.status(200).send({error:'Username is already in use'})
        }

        await db.collection('users').insertOne({
            email,
            password:await hash(password, 8),
            username,
            name
        })
        
    } catch(e) {

    }

}

