import { type ObjectId } from "mongodb";

export type UserSession = {
  _id: ObjectId;
  email: string;
  name:string;
  username: string;
}

export type FullUserDocument = {
  _id:ObjectId;
  email:string;
  name:string;
  username:string;
  password:string;
}