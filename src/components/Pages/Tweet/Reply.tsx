'use client';

import { ProfileImage } from "@/components/common/ProfileImageCircle";
import { useSession } from "next-auth/react";
import TextArea from "../Home/CreateTweet/TextArea";
import { StyledButtonBlue } from "@/components/common/StyledButton";
import { useState } from "react";
import type { TweetDataForClient } from "@/lib/types/tweets";
import { post_comment } from "@/lib/requests/tweet";

type Props = {
    tweetData:TweetDataForClient
}

export function Reply({tweetData}:Props) {
    const session = useSession()
    const [text,setText] = useState<string>('')

    const handle_post_comment = async () => {
        const action = await post_comment({
            userId:session.data?.user._id || '',
            text,
            parentTweet:tweetData._id || ''
        })
        if(!action.error) {
            alert('Error')
        } else {
            alert('nice,posted!')
        }
    }

    return (
        <div className="flex border_bottom px-4">
            <div className="py-5">
                <ProfileImage active_user_window={false} size="sm" url={session.data?.user.image}/>
            </div>
            <div className="pt-5 pl-4 w-full">
                <TextArea 
                    placeholder="Post your reply"
                    paddingTop="0.5rem"
                    onChange={value => setText(value)}
                />
            </div>
            <div className="py-5">
                <StyledButtonBlue 
                    onClick={() => void handle_post_comment()}
                    title="Reply"
                />
            </div>
        </div>
    )
}