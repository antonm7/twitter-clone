'use client';

import { RetweetIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";
import React from "react";

type Props = {
    size:Sizes
    activeNumberOfRetweets?:boolean
    retweets:number
}

export function Retweet({size,activeNumberOfRetweets,retweets}:Props) {
    const handle_retweet_action = async (e:React.MouseEvent) => {
        e.preventDefault()
    }

    return (
        <div onClick={(e) => handle_retweet_action(e)} id={styles.retweet_container} className={`cursor-pointer flex items-center`}>
            <RetweetIcon id={styles.retweet} size={size}/>
            {activeNumberOfRetweets && retweets ? <span className={`sub_text text-sm pl-3`}>{retweets}</span> : null}
        </div>
    )
}