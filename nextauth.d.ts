import { DefaultSession } from "next-auth";


declare module "next-auth" {
  interface Session {
    user: {
      _id:string;
      name:string;
      email:string;
      username:string;
      image?:string;
    };
    expires: string
  }

 
  interface User {
    _id:string;
    username:string;
    name:string;
    email:string;
    image?:string;
  }

  interface AdapterUser {
    _id:string;
    username:string;
    name:string;
    email:string;
    image?:string;
  }

    interface DefaultUser {
      _id:string;
      username:string;
      name:string;
      email:string;
      image?:string;
    }
  }

declare module "next-auth/jwt" {
    interface JWT {
      name:string;
      username:string;
      _id:string;
      email:string;
      image?:string;
    }
}