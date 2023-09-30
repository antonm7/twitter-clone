'use client';

import { HeartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";
import { useEffect, useState } from "react";
import { post_like, post_unlike } from "@/lib/requests/actions";
import { useTweetsListState } from "@/store/TweetsList";

type Props = {
    size:Sizes
    activeNumberOfLike?:boolean
    parentTweet:string
    userId:string
    likes:number
    isUserLiked:boolean
}

export function Like({size, activeNumberOfLike,userId, parentTweet,likes,isUserLiked}:Props) {
    const getIsUserLiked = useTweetsListState(state => state.getIsUserLiked)
    const getLikesLength = useTweetsListState(state => state.getLikesLength)

    const [isLiked,setIsLiked] = useState<boolean>(getIsUserLiked(parentTweet.toString()) || isUserLiked)
    const [likesCount, setLikesCount] = useState<number>(getLikesLength(parentTweet.toString()) || likes)
    const updateLikes = useTweetsListState(state => state.updateLikes)

    const handle_like_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(true)
        updateLikes(parentTweet,'inc')
        setLikesCount(likesCount + 1)
        const req = await post_like({userId, parentTweet})
        if(!req.error) {
            return
        } else {
            return
        }
    }

    const handle_unlike_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(false)
        updateLikes(parentTweet,'dec')
        setLikesCount(likesCount - 1)
        const req = await post_unlike({userId, parentTweet})
        if(!req.error) {
        } else {
            return
        }
    }

    return (
        <div 
            onClick={(e) => isLiked ? handle_unlike_action(e) : handle_like_action(e)}  
            id={styles.like_container} 
            className={`cursor-pointer flex items-center`}
        >
            <HeartIcon size={size} id={styles.like} full={isLiked}/>
            {likesCount.toString()}
            {/* {activeNumberOfLike && likesCount ? <span className={`sub_text text-sm pl-3`}>{likesCount}</span> : null} */}
        </div>
    )
}