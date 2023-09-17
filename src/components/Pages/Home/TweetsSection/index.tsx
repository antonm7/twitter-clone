'use client';

import { useEffect, useState } from "react";
import Tweet from "../Tweet";
import CreateTweet from "../CreateTweet";
import { UserSession } from "@/lib/types/user";
import { get_tweets } from "@/lib/requests/tweet";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTweetsListState } from "@/store/TweetsList";

type Props = {
    authenticated:boolean
    userData:UserSession | null
}

export default function TweetsSection({authenticated,userData}:Props) {
    const [likedTweets, setLikedTweets] = useState<string[]>([])
    const tweetsListStore = useTweetsListState(state => state)
    const [loading, setLoading] = useState<boolean>(tweetsListStore.list.length ? false : true)

    const [parent] = useAutoAnimate()

    useEffect(() => {
        async function get_tweets_handle() {
            const req = await get_tweets(authenticated ? userData?._id.toString()! : null)
            if(!req.error) {
                tweetsListStore.setList(req.data.tweets)
                setLikedTweets(req.data.liked_tweets)
            } 
            setLoading(false)
        }   
        if(!tweetsListStore.list.length) {
            get_tweets_handle() 
        }
    },[])

    return (
        <>
            {authenticated && userData ? 
                <CreateTweet 
                    userData={userData}
                    insertedTweet={newTweet => tweetsListStore.insertTweet(newTweet)}
                />
            : null}
            <div ref={parent}>
                {loading ? <h1>Loading...</h1> : tweetsListStore.list.map(tweet => (
                    <Tweet
                        key={tweet._id.toString()}
                        _id={tweet._id.toString()}
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
        </>
    )
}