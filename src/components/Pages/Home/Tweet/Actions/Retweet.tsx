'use client';

import { RetweetIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";
import React, { useEffect, useState } from "react";
import { useTweetsListState } from "@/store/TweetsList";
import { post_unretweet } from "@/lib/requests/actions";

type Props = {
    size:Sizes
    // option to show number of retweets
    // TODO:need to add functionality to it.
    activeNumberOfRetweets?:boolean
    retweets:number
    isComment?:boolean
    parentTweet:string
    userId:string
    isUserRetweeted:boolean
}

export function Retweet({isComment,size,activeNumberOfRetweets,retweets,parentTweet, isUserRetweeted,userId}:Props) {
    const state = useTweetsListState(state => state)

    const [isRetweeted,setIsRetweeted] = useState<boolean>(
        isComment ? isUserRetweeted : state.getIsUserRetweeted(parentTweet)
    )
    
    const [retweetsCount,setRetweetsCount] = useState<number>(
        isComment ? retweets : state.getRetweetsLength(parentTweet)
    )

    useEffect(() => {
        setIsRetweeted(isUserRetweeted)
    },[isUserRetweeted])

    const handle_retweet_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsRetweeted(true)
        !isComment ? state.updateRetweets(parentTweet, 'inc') : null;
        setRetweetsCount(retweetsCount + 1)
        const req = await post_unretweet({userId, parentTweet});
        if(!req.error) {
            console.log('success on retweet action')
        } else {
            console.log('error on retweet action')
        }
    }

    const handle_unretweet_action = async (e:React.MouseEvent) => {
        e.preventDefault();
        setIsRetweeted(true);
        !isComment ? state.updateRetweets(parentTweet, 'dec') : null;
        setRetweetsCount(retweetsCount - 1)
        const req = await post_unretweet({userId, parentTweet});
        if(!req.error) {
            console.log('success on unretweet action')
        } else {
            console.log('error on unretweet action')
        }
    }

    return (
        <div 
            onClick= {(e) => !isRetweeted ? handle_retweet_action(e) : handle_unretweet_action(e)}
            id={styles.retweet_container} 
            className={`cursor-pointer flex items-center`}
        >
            <RetweetIcon id={styles.retweet} size={size} full={isRetweeted}/>
            {/* {activeNumberOfRetweets && retweets ? <span className={`sub_text text-sm pl-3`}>{retweets}</span> : null} */}
        </div>
    )
}