'use client';

import { type FullTweetData } from "@/lib/types/tweets";
import { useEffect, useState } from "react";
import Tweet from "../Tweet";
import CreateTweet from "../CreateTweet";
import { UserSession } from "@/lib/types/user";
import { get_tweets } from "@/lib/requests/tweet";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
    authenticated:boolean
    userData:UserSession | null
}

export default function TweetsSection({authenticated,userData}:Props) {
    const [tweetsList, setTweetsList] = useState<FullTweetData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [likedTweets, setLikedTweets] = useState<string[]>([])

    const [parent] = useAutoAnimate()

    useEffect(() => {
        async function get_tweets_handle() {
            const req = await get_tweets(authenticated ? userData?._id.toString()! : null)
            if(!req.error) {
                setTweetsList(req.data.tweets)
                setLikedTweets(req.data.liked_tweets)
            } 
            setLoading(false)
        }   
        get_tweets_handle() 
    },[])

    return (
        <div ref={parent}>
            {authenticated && userData ? 
                <CreateTweet 
                    userData={userData}
                    insertedTweet={newTweet => setTweetsList([newTweet,...tweetsList])}
                />
            : null }
            {loading ? <h1>Loading...</h1> : tweetsList?.map(tweet => (
                <Tweet
                    userData={userData as unknown as UserSession}
                    authentication={authenticated}
                    key={JSON.stringify(tweet._id)}
                    _id={tweet._id}
                    text={tweet.text}
                    likes={tweet.likes}
                    retweets={tweet.retweets}
                    userId={tweet.userId}
                    createdAt={tweet.createdAt}
                    user_name={tweet.user_name}
                    user_username={tweet.user_username}
                    user_img={tweet.user_img}
                    comments={tweet.comments} 
                    shares={tweet.shares} 
                    views={tweet.views}   
                    isUserLiked={likedTweets.includes(tweet._id.toString())}                
                />
            ))}
        </div>
    )
}