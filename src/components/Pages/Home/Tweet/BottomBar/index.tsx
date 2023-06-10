import { Chart } from "../Actions/Chart"
import { Comments } from "../Actions/Comments"
import { Like } from "../Actions/Like"
import { Retweet } from "../Actions/Retweet"
import { Share } from "../Actions/Share"

export function BottomBar() {
    return (
        <div className="flex justify-between items-center pt-4 max-w-[80%]">
            <Comments />
            <Retweet />
            <Like />
            <Chart />
            <Share />
        </div>
    )
}









