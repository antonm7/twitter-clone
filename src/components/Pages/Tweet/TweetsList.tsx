import { get_comments } from "@/lib/requests/tweet";
import { ObjectId } from "mongodb";

export async function TweetsList({parentTweet}:{parentTweet:string | ObjectId}) {
    const get_comments_handler = await get_comments({parentTweet})
    console.log(get_comments_handler.data)
    // if(!get_comments_handler) return  null
    return (
        <div>
            {}
        </div>
    )
}