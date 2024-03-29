'use client';

import { FullComment } from "@/components/common/FullComment/Index";
import { get_comments } from "@/lib/requests/tweet";
import { FullCommentData } from "@/lib/types/tweets";
import { useCommentsListStore } from "@/store/CommentsList";
import { ObjectId } from "mongodb";
import { Session } from "next-auth/core/types";
import { useEffect, useRef, useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const load_comments = async (parentTweet:string,userId?:string) => {
    return await get_comments({parentTweet,userId})
}

export function CommentsList({parentTweet, userSession}:{parentTweet:string,userSession:Session | null}) {
    const [loading, setLoading] = useState<boolean>(true)
    const [likedComments, setLikedComments] = useState<string[]>([])

    const commentsList = useCommentsListStore(state => state.list)
    const setCommentsList = useCommentsListStore(state => state.setList)

    const [parent] = useAutoAnimate()

    useEffect(() => {
        setLoading(true)
        const load_comments_handler = async () => {
            const body = await load_comments(parentTweet.toString(),userSession?.user._id.toString())
            setCommentsList(body.data.comments)
            setLikedComments(body.data.liked_comments)
            setLoading(false)
        }
        load_comments_handler()
    },[])

    if(loading) return <h3 className="sub_text text-center">Loading...</h3>

    if(!commentsList.length) return <h3 className="sub_text text-center">No Comments</h3>
    
    return (
        <div ref={parent}>
            {commentsList.map(
                (comment:FullCommentData) => <FullComment 
                        key={comment._id.toString()} 
                        commentData={comment} 
                        likedComments={likedComments}
                    />
                )}
        </div>
    )
}

