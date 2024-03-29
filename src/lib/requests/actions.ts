import { ResponseObject } from "./types"

type post_like_type = {
    userId:string
    parentTweet:string
}

export async function post_like({
    userId,
    parentTweet
}:post_like_type):Promise<ResponseObject> {
    try {
        const request = await fetch('/api/tweets/like_tweet', {
            method:'POST',
            body:JSON.stringify({
                userId,
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

export async function post_unlike({
    userId,
    parentTweet
}:post_like_type):Promise<ResponseObject> {
    try {
        const request = await fetch('/api/tweets/unlike_tweet', {
            method:'POST',
            body:JSON.stringify({
                userId,
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

export async function post_retweet({
    userId,
    parentTweet
}:post_like_type):Promise<ResponseObject> {
    try {
        const request = await fetch('/api/tweets/retweet_tweet', {
            method:'POST',
            body:JSON.stringify({
                userId,
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

export async function post_unretweet({
    userId,
    parentTweet
}:post_like_type):Promise<ResponseObject> {
    try {
        const request = await fetch('/api/tweets/unretweet_tweet', {
            method:'POST',
            body:JSON.stringify({
                userId,
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