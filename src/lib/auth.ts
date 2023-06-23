import NextAuth from 'next-auth'
import type { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'
import { connectToDatabase } from './mongodb'
import {compare} from 'bcrypt'
import { type FullUserDocument, type UserSession } from './types/user'

export const authOptions:NextAuthOptions = {
    session: {
        strategy: 'jwt'
      },
    providers: [
        CredentialsProviders({
            async authorize(credentials):Promise<any>  {
                try {
                    if(!credentials?.email || !credentials.password) throw new Error('Please provide email and password')

                    const db = await connectToDatabase();
                    const users = await db.collection('users');

                    const results = await users.findOne({email: credentials.email}) as null | FullUserDocument;

                    if(!results) throw new Error("Email Or Password Are Invalid");
                    
                    const isValid = compare(credentials.password, results.password)

                    if(!isValid) throw new Error("Email Or Password Are Invalid")

                    return {
                        _id:results._id,
                        email:results.email,
                        first_name:results.first_name,
                        second_name:results.second_name,
                        username:results.username
                    }
                }
                catch (e) {
                    return null
                }
            },
            credentials: {
                email:{label:"Email", type:"text",placeholder:"Your Email"},
                password:{label:"Password", type:"password",placeholder:"Your Password"}
            }
        })
    ]
}

export default NextAuth(authOptions)