import { ObjectId } from "mongodb"

export type InsertRetweetToDatabase = {
    userId:string
    parentTweet:string
}
