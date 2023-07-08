import { type ObjectId } from "mongodb";

export type FullTweetData = {
    _id:ObjectId;
    text:string;
    likes:string[];
    dislikes:string[];
    retweets:string[];
}

export type Comment = {
    _id:ObjectId;
    parent_tweet:string;
    text:string[];
    likes:string[];
    dislikes:string[];
    retweets:string[];
}