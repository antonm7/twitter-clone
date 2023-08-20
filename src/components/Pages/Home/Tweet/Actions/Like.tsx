'use client';

import { HeartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";
import { useState } from "react";
import { post_like } from "@/lib/requests/actions";

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

    const handle_like_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(!isLiked)
        const req = await post_like({userId, parentTweet})
        if(!req.error) {
            setIsLiked(true)
        } else {
            return
        }
    }

    return (
        <div onClick={(e) => handle_like_action(e)}  id={styles.like_container} className={`cursor-pointer flex items-center`}>
            <HeartIcon size={size} id={styles.like} full={isUserLiked}/>
            {activeNumberOfLike && likes ? <span className={`sub_text text-sm pl-3`}>{likes}</span> : null}
        </div>
    )
}