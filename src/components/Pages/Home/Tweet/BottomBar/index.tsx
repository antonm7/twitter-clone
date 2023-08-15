import { TweetDataForClient } from "@/lib/types/tweets"
import { Chart } from "../Actions/Chart"
import { Comments } from "../Actions/Comments"
import { Like } from "../Actions/Like"
import { Retweet } from "../Actions/Retweet"
import { Share } from "../Actions/Share"
import { ObjectId } from "mongodb"

type Props = {
    tweetData:TweetDataForClient
}

export function BottomBar({tweetData}:Props) {
    return (
        <div className="flex justify-between items-center pt-4 max-w-[80%]">
            <Comments tweetData={tweetData}/>
            <Retweet />
            <Like />
            <Chart />
            <Share />
        </div>
    )
}









