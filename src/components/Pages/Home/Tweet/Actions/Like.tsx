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
    isComment?:boolean
}

export function Like({
    size, 
    activeNumberOfLike,
    userId, 
    parentTweet,
    likes,
    isUserLiked,
    isComment}:Props) {
    const getIsUserLiked = useTweetsListState(state => state.getIsUserLiked)
    const getLikesLength = useTweetsListState(state => state.getLikesLength)

    const [isLiked,setIsLiked] = useState<boolean>(
        isComment ? isUserLiked : getIsUserLiked(parentTweet)
    )
    const [likesCount, setLikesCount] = useState<number>(
        isComment ? likes : getLikesLength(parentTweet) || likes)
    
    const updateLikes = useTweetsListState(state => state.updateLikes)

    useEffect(() => {
        setIsLiked(isUserLiked)
    },[isUserLiked])

    const handle_like_action = async (e:React.MouseEvent) => {
        e.preventDefault()
        setIsLiked(true)
        !isComment ? updateLikes(parentTweet,'inc') : null
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
        !isComment ? updateLikes(parentTweet,'dec') : null
        setLikesCount(likesCount - 1)
        const req = await post_unlike({userId, parentTweet})
        if(!req.error) {
        } else {
            return
        }
    }

    return (
        <div 
            onClick={
                (e) => isLiked ? handle_unlike_action(e) : handle_like_action(e)}  
            id={styles.like_container} 
            className={`cursor-pointer flex items-center`}>
            {/* TODO:some weird bug, somtimes the isLiked state is braking, probably
            because of the server/client components hirarchy.For now I keep this state updated 
            with the useEffect, so it will run everytime, but its not the best ux, because user can see
            the state changes live instead of rendering with the recent state */}
            <HeartIcon size={size} id={styles.like} full={isLiked}/> 
            {/* {activeNumberOfLike && likesCount ? <span className={`sub_text text-sm pl-3`}>{likesCount}</span> : null} */}
        </div>
    )
}