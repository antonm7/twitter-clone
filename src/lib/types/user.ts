import { type ObjectId } from "mongodb";

export type UserSession = {
  _id: ObjectId;
  email: string;
  name:string;
  username: string;
  image:string;
}

export type FullUserDocument = {
  _id:ObjectId;
  email:string;
  name:string;
  username:string;
  password:string;
  bio:string;
  following:string[];
  followers:string[];
  joined_at:string;
  profile_image:string;
  background_image:string;
  tweets:string[];
  comments:string[];
  likes:string[];
  bookmark:string[];
  retweets:string[];
}
