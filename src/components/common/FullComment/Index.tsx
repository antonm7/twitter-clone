import { FullCommentData } from "@/lib/types/tweets";
import { SettingsWithBackground } from "../Icons/Settings";
import { BottomBar } from "@/components/Pages/Home/Tweet/BottomBar";
import { ProfileImage } from "../ProfileImageCircle";
import { TweetOptions } from "@/components/Pages/Home/Tweet/TweetOptions";

type Props = {
    commentData:FullCommentData
    likedComments:string[]
}

export function FullComment({commentData,likedComments}:Props) {
    return (
        <div>
            <div className="hover_effect_light hover_effect_transition flex border_bottom pt-2 pb-3 px-4">
                <ProfileImage 
                    active_user_window={true} 
                    username={commentData.user_username} 
                    url={commentData.user_img}
                />
                <div className="ml-4 w-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-base font-medium pr-1">{commentData.user_name}</span>
                            <span className="text-sm sub_text pr-1">@{commentData.user_username}</span>
                            <span className="text-sm sub_text">- 4m</span>
                        </div>
                        <SettingsWithBackground>
                            <TweetOptions active={false}/>
                        </SettingsWithBackground>
                    </div>
                    <div className="text-md block">
                        <p>{commentData.text}</p>
                    </div>
                    <BottomBar 
                        size="sm"
                        tweetData={{
                            _id: commentData._id.toString(),
                            userId: commentData.userId,
                            user_img: commentData.user_img,
                            user_name: commentData.user_name,
                            user_username: commentData.user_username,
                            text: commentData.text,
                            createdAt: commentData.createdAt
                        }} 
                        likes_length={commentData.likes}
                        retweet_length={commentData.retweets} 
                        comments_length={commentData.comments} 
                        chart={commentData.views} 
                        share={commentData.shares} 
                        isUserLiked={likedComments.includes(commentData._id.toString())} 
                    />
                </div>
            </div>
        </div>
    )
}