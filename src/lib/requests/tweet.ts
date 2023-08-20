import { ObjectId } from "mongodb"
import { ResponseObject } from "./types"

type post_comment_type = {
    userId:string | ObjectId
    text:string
    parentTweet:string | ObjectId
}

export async function post_comment({
    userId,
    text,
    parentTweet
}:post_comment_type):Promise<ResponseObject> {
    try {
        const request = await fetch('/api/tweets/create_comment', {
            method:'POST',
            body:JSON.stringify({
                userId,
                text,
                parentTweet
            })
        })
        const response = await request.json()
        if(response.ok) {
            return {error:false} 
        } else {
            throw new Error('Unexpected Error')
        }
    } catch(e) { 
        return {error:e as string}
    }
}

export async function get_comments({parentTweet}
    :{parentTweet:string | ObjectId}):Promise<ResponseObject> {
    try {
        // TODO:appearently, when you call fetch from server side component/page, you
        // need to specify the relative path  
        const request = await fetch(`http://localhost:3000/api/tweets/get_comments?parentTweet=${parentTweet}`,{
            method:"GET"
        })
        const response = await request.json()

        if(response.ok) {
            return {error:false,data:response} 
        } else {
            throw new Error('Unexpected Error')
        }
        
    } catch(e) { 
        return {error:e as string}
    }
}

export async function get_stats({parentTweet,userId}:
    {parentTweet:string | ObjectId,userId:string | ObjectId | null}):Promise<ResponseObject> {
   
    try {
        const request = await fetch(`http://localhost:3000/api/tweets/get_stats?parentTweet=${parentTweet}&userId=${userId}`,{
            method:"GET"
        })
        const response = await request.json()
        if(response.ok) {
            return {error:false,data:response.data as {isUserLiked:boolean,
                isUserRetweeted:boolean
            }
        }
        } else {
            throw new Error('Unexpected Error')
        }

    } catch(e) {
        return {error:e as string}
    }
} 