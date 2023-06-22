import NextAuth from 'next-auth'
import type { Awaitable, NextAuthOptions, RequestInternal, User } from 'next-auth'
import CredentialsProviders from 'next-auth/providers/credentials'

export const authOptions:NextAuthOptions = {
    session: {
        strategy:'jwt'
    },
    providers: [
        CredentialsProviders({
            async authorize(credentials, req) {
                console.log(credentials,req)
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (user) {
                    return user
                } else {
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