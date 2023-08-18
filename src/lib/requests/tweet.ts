import { ObjectId } from "mongodb"

type ResponseObject = {
    error:string | boolean
    data?:any
}

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