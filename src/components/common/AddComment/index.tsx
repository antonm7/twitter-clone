'use client';

import TextArea from "@/components/Pages/Home/CreateTweet/TextArea";
import { Xmark } from "../Icons/CommonIcons";
import { ProfileImage } from "../ProfileImageCircle";
import styles from './index.module.scss';
import { StyledButtonBlue } from "../StyledButton";
import { useHiddenLayerStore } from "@/store/HiddenLayer";
import { FullTweetData, TweetDataForClient } from "@/lib/types/tweets";
import { useSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";
import { useState } from "react";
import { post_comment } from "@/lib/requests/tweet";

type Props = {
    active:boolean
    tweetData:TweetDataForClient
}

export function AddComment({active,tweetData}:Props) {
    const HiddenLayer = useHiddenLayerStore(state => state)
    const {data} = useSession()
    const [text, setText] = useState<string>('')

    const handle_post_comment = async () => {
        const action = await post_comment({
            userId:data?.user._id || '',
            text,
            parentTweet:tweetData._id || ''
        })
        if(!action.error) {
            alert('Error')
        } else {
            alert('nice,posted!')
        }
    }

    if(!active) return null

    return (
        <div className="fixed w-[33rem] h-min rounded-xl z-50 p-4" id={styles.wrapper}>
           <Xmark 
                id={styles.close_button}
                method={() => HiddenLayer.changeVisibility(false)}
            />
           <MinimizedTweet tweetData={tweetData} />
           <CreateComment updateText={value => setText(value)}/>
           <BottomTab method={() => void handle_post_comment()}/>
        </div>
    )
}

export function MinimizedTweet({tweetData}:{tweetData:TweetDataForClient}) {
    return (
            <div className="flex pt-6 ">
                <div>
                    <ProfileImage 
                        active_user_window={false}
                        username={tweetData.user_username}
                        url={tweetData.user_img}/>
                    <ConnectionLine />
                </div>
                <div className="ml-4 w-full ">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-base font-medium pr-1">{tweetData.user_name}</span>
                            <span className="text-sm sub_text pr-1">@{tweetData.user_username}</span>
                            <span className="text-sm sub_text">- 4m</span>
                        </div>
                    </div>
                    <div className="text-md block">
                        <p>{tweetData.text}</p>
                    </div>
                </div>
            </div>
    )
}

export function CreateComment({updateText}:{updateText:(text:string) => void}) {
    return (
        <div className="min-h-fit pt-4 ">
            <div className="h-auto flex justify-center pr-4">
                <div className="pr-4">
                    <ProfileImage active_user_window={false} url={''}/>
                </div>
                <TextArea paddingTop="0.5rem" 
                onChange={value => updateText(value)}/>
            </div>
        </div>
    )
}

export function BottomTab({method}:{method:() => void}) {
    return (
        <div className="w-full flex justify-end">
            <StyledButtonBlue title="Replay" onClick={method}/>
        </div>
    )
}

export function ConnectionLine() {
    return (
        <div className="w-[2px] h-[77%] bg-gray-600 m-auto mt-2"></div>
    )
}


