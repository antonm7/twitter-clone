import { ObjectId } from "mongodb"

export type FullLikeData = {
    _id:ObjectId
    userId:string
    parentTweet:string
}

export type InsertedLike = {
    userId:string
    parentTweet:string
}