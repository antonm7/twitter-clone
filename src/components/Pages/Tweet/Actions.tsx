import { FullTweetData } from "@/lib/types/tweets"
import { Bookmark } from "../Home/Tweet/Actions/Bookmark"
import { Comments } from "../Home/Tweet/Actions/Comments"
import { Like } from "../Home/Tweet/Actions/Like"
import { Retweet } from "../Home/Tweet/Actions/Retweet"
import { Share } from "../Home/Tweet/Actions/Share"
import { Session } from "next-auth/core/types"

type Props = {
    tweetData:FullTweetData
    userSession:Session | null
    isUserLiked:boolean
    likes:number
}

export function Actions({tweetData,userSession,isUserLiked,likes}:Props) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <Comments size="lg" tweetData={tweetData} />
                <Retweet size="lg" retweets={tweetData.retweets}/>
                <Like 
                    size="lg" 
                    parentTweet={tweetData._id.toString()} 
                    userId={userSession ? userSession.user._id : ''}
                    likes={likes}
                    isUserLiked={isUserLiked}/>
                <Bookmark size="lg"/>
                <Share size="lg"/>
            </div>
        </div>
    )
}