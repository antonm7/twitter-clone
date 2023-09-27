'use client';

import { useEffect, useMemo, useState } from "react";
import Tweet from "../Tweet";
import CreateTweet from "../CreateTweet";
import { UserSession } from "@/lib/types/user";
import { get_tweets } from "@/lib/requests/tweet";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTweetsListState } from "@/store/TweetsList";
import React from "react";

type Props = {
    authenticated:boolean
    userData:UserSession | null
}

export default function TweetSection({authenticated,userData}:Props) {
    const [likedTweets, setLikedTweets] = useState<string[]>([])
    const tweetsListStore = useTweetsListState(state => state)
    const [loading, setLoading] = useState<boolean>(Object.keys(tweetsListStore.list).length ? false : true)

    const [parent] = useAutoAnimate()
// TODO:waht i want to do is to set when liked, to the local object of the tweet, so
// need to update zostand store to accept change like thjat
// Or figure out why this component re-renders each page visit..maybe its not evet and problem...maybe
// thats the lgtm way of react.
    useEffect(() => {
        async function get_tweets_handle() {
            const req = await get_tweets(authenticated ? userData?._id.toString()! : null)
            if(!req.error) {
                tweetsListStore.setList(req.data.tweets)
            } 
            setLoading(false)
        }   
        if(!Object.keys(tweetsListStore.list).length) {
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
                {loading ? <h1>Loading...</h1> : Object.keys(tweetsListStore.list).map(id => (
                    <Tweet
                        key={id}
                        _id={id}
                        text={tweetsListStore.list[id].text}
                        likes={tweetsListStore.list[id].likes}
                        retweets={tweetsListStore.list[id].retweets}
                        userId={tweetsListStore.list[id].userId}
                        createdAt={tweetsListStore.list[id].createdAt}
                        user_name={tweetsListStore.list[id].user_name}
                        user_username={tweetsListStore.list[id].user_username}
                        user_img={tweetsListStore.list[id].user_img}
                        comments={tweetsListStore.list[id].comments} 
                        shares={tweetsListStore.list[id].shares} 
                        views={tweetsListStore.list[id].views}   
                        isUserLiked={tweetsListStore.list[id].isUserLiked || false}                
                    />
                ))}
            </div>
        </>
    )
}
