import { type ObjectId } from "mongodb";

export type FullTweetData = {
    _id:ObjectId | string;
    text:string;
    likes:string[];
    dislikes:string[];
    retweets:string[];
    userId:string;
    createdAt:Date;
    user_name:string;
    user_username:string;
    user_img:string;
}

export type Comment = {
    _id:ObjectId;
    parent_tweet:string;
    text:string[];
    likes:string[];
    dislikes:string[];
    retweets:string[];
    userId:string;
    createdAt:Date;
    user_name:string;
    user_username:string;
    user_img:string;
}

export type InsertedTweet = {
    text:string;
    likes:string[];
    dislikes:string[];
    retweets:string[];
    userId:string;
    createdAt:Date;
    user_name:string;
    user_username:string;
    user_img:string;
}