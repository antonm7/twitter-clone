'use client';

import TextArea from "@/components/Pages/Home/CreateTweet/TextArea";
import BottomTab from "./BottomTab";
import {RegularProfileImageCircle} from "@/components/common/ProfileImageCircle";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { FullTweetData } from "@/lib/types/tweets";

type Props = {
    insertedTweet:(newTweet:FullTweetData) => void
}

export default function CreateTweet({insertedTweet}:Props) {
    const [text, setText] = useState<string>('')
    const { data } = useSession()

    async function post_tweet() {
        try {
            const request = await fetch('/api/tweets/create_tweet', {
                method:'POST',
                body:JSON.stringify({
                    userId:data?.user._id,
                    text
                })
            })
            const response = await request.json()
            if(response.ok) {
                insertedTweet(response.tweet)
            } else {
                console.log(response)
            }
        } catch(e) { 
            console.log('error',e)
            throw new Error('Unexpected Error')
        }
    }

    return (
        <div className="w-full min-h-fit flex border_bottom">
            <div className="w-20 h-auto flex justify-center pt-3">
                <RegularProfileImageCircle />
            </div>
            <div className="w-full pr-8">
               <TextArea onChange={value => setText(value)}/>
               <BottomTab method={() => void post_tweet()}/>
            </div>
        </div>
    )
}