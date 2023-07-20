import NextAuth from 'next-auth'
import type { Awaitable, DefaultSession, NextAuthOptions, RequestInternal, User,DefaultUser } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'
import { connectToDatabase } from './mongodb'
import {compare} from 'bcrypt'
import { type FullUserDocument, type UserSession } from './types/user'

export const authOptions:NextAuthOptions = {
    secret:process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        jwt({token, user}) {
            if(user) {
                token.email = user.email;
                token.name = user.name;
                token.username = user.username;
                token._id = user._id;
                token.image = user.image
            }
            return token
        },
          session({session, token}) {
            if(token.picture) {
                session.user = {
                    name:token.name,
                    email:token.email,
                    username:token.username,
                    _id:token._id,
                    image:token.image
                }
            } else {
                session.user = {
                    name:token.name,
                    email:token.email,
                    username:token.username,
                    _id:token._id
                }
            }
            return session
        }
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
                        name:results.name,
                        username:results.username,
                        image:results.profile_image
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