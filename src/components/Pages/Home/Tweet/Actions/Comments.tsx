'use client';

import { Chat } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { TurnOnHiddenLayerWrapper } from "@/components/common/TurnOnHiddenLayerWrapper";
import { RefObject, useState } from "react";
import { AddComment } from "@/components/common/AddComment";
import { TweetDataForClient } from "@/lib/types/tweets";
import { Sizes } from "@/lib/types/common";

type Props = {
    tweetData:TweetDataForClient
    activeNumberOfComments?:boolean
    size:Sizes
    preventDefault?:boolean
}

export function Comments({tweetData,
    activeNumberOfComments,size,preventDefault}:Props) {
    const [active, setActive] = useState<boolean>(false)

    return (
        <div onClick={(e) => e.preventDefault()}>
            <TurnOnHiddenLayerWrapper bg={true} onActive={(value) => setActive(value)}>
                <div id={styles.comments_container} 
                    className={`cursor-pointer flex items-center w-min h-min`}>
                    <Chat id={styles.comment} size={size}/>
                    {activeNumberOfComments ? <span className="sub_text text-sm pl-2">4</span> 
                    : null}
                </div>
                {active ? <AddComment tweetData={tweetData} active={active}/> : null}
            </TurnOnHiddenLayerWrapper>
        </div>
    )
}