import { TweetDataForClient } from "@/lib/types/tweets"
import { Chart } from "../Actions/Chart"
import { Comments } from "../Actions/Comments"
import { Like } from "../Actions/Like"
import { Retweet } from "../Actions/Retweet"
import { Share } from "../Actions/Share"
import { Sizes } from "@/lib/types/common"

type Props = {
    tweetData:TweetDataForClient
    size:Sizes
}

export function BottomBar({tweetData,size}:Props) {
    return (
        <div className="flex justify-between items-center pt-4 max-w-[80%]">
            <Comments size={size} tweetData={tweetData}/>
            <Retweet size={size}/>
            <Like size={size}/>
            <Chart size={size}/>
            <Share size={size}/>
        </div>
    )
}









