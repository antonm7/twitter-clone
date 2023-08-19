'use client';

import { FullComment } from "@/components/common/FullComment/Index";
import { get_comments } from "@/lib/requests/tweet";
import { FullCommentData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";

const load_comments = async (parentTweet:string) => {
    return await get_comments({parentTweet})
}

export function CommentsList({parentTweet}:{parentTweet:string | ObjectId}) {
    const [loading, setLoading] = useState<boolean>(true)
    const [comments,setComments] = useState<FullCommentData[]>([])
    
    useEffect(() => {
        setLoading(true)
        const load_comments_handler = async () => {
            const body = await load_comments(parentTweet.toString())
            setComments((body.data))
            setLoading(false)
        }
        load_comments_handler()
    },[])

    if(loading) return <h3 className="sub_text text-center">Loading...</h3>

    if(!comments.length) return <h3 className="sub_text text-center">No Comments</h3>
    
    return (
        <div>
            {comments.map(
                (comment:FullCommentData) => <FullComment 
                    key={comment._id.toString()} 
                    {...comment} />
                )}
        </div>
    )
}