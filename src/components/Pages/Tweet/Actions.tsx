import { FullTweetData } from "@/lib/types/tweets"
import { Bookmark } from "../Home/Tweet/Actions/Bookmark"
import { Comments } from "../Home/Tweet/Actions/Comments"
import { Like } from "../Home/Tweet/Actions/Like"
import { Retweet } from "../Home/Tweet/Actions/Retweet"
import { Share } from "../Home/Tweet/Actions/Share"

type Props = {
    tweetData:FullTweetData
}

export function Actions({tweetData}:Props) {
    return (
        <div >
            <div className="flex items-center justify-between">
                <Comments size="lg" tweetData={tweetData} />
                <Retweet size="lg" retweets={tweetData.retweets}/>
                <Like 
                    size="lg" 
                    parentTweet={tweetData._id.toString()} 
                    userId={""}
                    likes={0}
                    isUserLiked={false}/>
                <Bookmark size="lg"/>
                <Share size="lg"/>
            </div>
        </div>
    )
}