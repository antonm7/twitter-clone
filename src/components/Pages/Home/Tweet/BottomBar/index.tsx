'use client';

import { TweetDataForClient } from "@/lib/types/tweets"
import { Chart } from "../Actions/Chart"
import { Comments } from "../Actions/Comments"
import { Like } from "../Actions/Like"
import { Retweet } from "../Actions/Retweet"
import { Share } from "../Actions/Share"
import { Sizes } from "@/lib/types/common"
import { useSession } from "next-auth/react";

type Props = {
    tweetData:TweetDataForClient
    size:Sizes
    likes_length:number
    retweet_length:number
    comments_length:number
    chart:number
    share:number
    isUserLiked:boolean
}

export function BottomBar(props:Props) {
    const session = useSession()

    return (
        <div className="flex justify-between items-center pt-4 max-w-[80%]">
            <Comments size={props.size} tweetData={props.tweetData}/>
            <Retweet activeNumberOfRetweets retweets={props.retweet_length} size={props.size}/>
            <Like 
                isUserLiked={props.isUserLiked}
                activeNumberOfLike
                likes={props.likes_length}
                userId={session.data?.user._id || ''} 
                parentTweet={props.tweetData._id.toString()} 
                size={props.size}
            />
            <Chart size={props.size}/>
            <Share size={props.size}/>
        </div>
    )
}









