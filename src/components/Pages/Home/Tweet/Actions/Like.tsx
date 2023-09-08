'use client';

import { HeartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";
import { useState } from "react";
import { post_like, post_unlike } from "@/lib/requests/actions";

type Props = {
    size:Sizes
    activeNumberOfLike?:boolean
    parentTweet:string
    userId:string
    likes:number
    isUserLiked:boolean
}

export function Like({size, activeNumberOfLike,userId, parentTweet,likes,isUserLiked}:Props) {
    const [isLiked,setIsLiked] = useState<boolean>(isUserLiked)
    const [likesCount, setLikesCount] = useState<number>(likes)

    const handle_like_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(true)
        const req = await post_like({userId, parentTweet})
        if(!req.error) {
            setIsLiked(true)
            setLikesCount(likesCount => likesCount += 1)
        } else {
            return
        }
    }

    const handle_unlike_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(false)
        const req = await post_unlike({userId, parentTweet})
        if(!req.error) {
            setIsLiked(false)
            setLikesCount(likesCount => likesCount -= 1)
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
            {activeNumberOfLike && likesCount ? <span className={`sub_text text-sm pl-3`}>{likesCount}</span> : null}
        </div>
    )
}