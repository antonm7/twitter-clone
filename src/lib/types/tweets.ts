import { type ObjectId } from "mongodb";

export type TweetDataForClient = {
    _id:ObjectId | string,
    userId:string,
    user_img:string,
    user_name:string,
    user_username:string,
    text:string,
    createdAt:Date
}

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
    comments:string[];
}

export type FullCommentData = {
    _id:ObjectId;
    parent_tweet:string;
    text:string;
    likes:string[];
    dislikes:string[];
    retweets:string[];
    userId:string;
    createdAt:Date;
    user_name:string;
    user_username:string;
    user_img:string;
    comments:string[];
}

export type InsertedComment = {
    parent_tweet:string;
    text:string;
    likes:string[];
    dislikes:string[];
    retweets:string[];
    userId:string;
    createdAt:Date;
    user_name:string;
    user_username:string;
    user_img:string;
    comments:string[]
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
    comments:string[];
}