import { Bookmark } from "../Home/Tweet/Actions/Bookmark"
import { Comments } from "../Home/Tweet/Actions/Comments"
import { Like } from "../Home/Tweet/Actions/Like"
import { Retweet } from "../Home/Tweet/Actions/Retweet"
import { Share } from "../Home/Tweet/Actions/Share"

export function Actions() {
    return (
        <div >
            <div className="flex items-center justify-between">
                <Comments 
                    size="lg"
                    tweetData={{
                        _id: "",
                        userId: "",
                        user_img: "",
                        user_name: "",
                        user_username: "",
                        text: "",
                        createdAt: new Date
                }} />
                <Retweet size="lg"/>
                <Like size="lg"/>
                <Bookmark size="lg"/>
                <Share size="lg"/>
            </div>
        </div>
    )
}