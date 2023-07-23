'use client';

import { type FullTweetData } from "@/lib/types/tweets";
import { useEffect, useState } from "react";
import Tweet from "../Tweet";
import CreateTweet from "../CreateTweet";
import { UserSession } from "@/lib/types/user";

type Props = {
    tweets:FullTweetData[]
    authenticated:boolean
    userData:UserSession | null
}

export default function TweetsSection({tweets,authenticated,userData}:Props) {
    const [tweetsList, setTweetsList] = useState<FullTweetData[]>(tweets)

    return (
        <div>
            {authenticated && userData ? 
                <CreateTweet 
                    userData={userData}
                    insertedTweet={newTweet => setTweetsList([newTweet,...tweetsList])}
                />
            : null }
            {tweetsList?.map(tweet => (
                <Tweet 
                    key={JSON.stringify(tweet._id)}
                    _id={tweet._id}
                    text={tweet.text} 
                    likes={tweet.likes} 
                    dislikes={tweet.dislikes} 
                    retweets={tweet.retweets} 
                    userId={tweet.userId} 
                    createdAt={tweet.createdAt} 
                    user_name={tweet.user_name} 
                    user_username={tweet.user_username} 
                    user_img={tweet.user_img} 
                />))}
        </div>
    )
}