'use client';

import { type FullTweetData } from "@/lib/types/tweets";
import { useEffect, useState } from "react";
import Tweet from "../Tweet";
import CreateTweet from "../CreateTweet";

type Props = {
    tweets:FullTweetData[]
}

export default function TweetsSection({tweets}:Props) {
    const [tweetsList, setTweetsList] = useState<FullTweetData[]>(tweets)

    return (
        <div>
            <CreateTweet insertedTweet={newTweet => setTweetsList([newTweet,...tweetsList])}/>
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