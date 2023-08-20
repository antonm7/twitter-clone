
import { FullCommentData } from "@/lib/types/tweets";
import { SettingsWithBackground } from "../Icons/Settings";
import { BottomBar } from "@/components/Pages/Home/Tweet/BottomBar";
import { ProfileImage } from "../ProfileImageCircle";

export function FullComment(data:FullCommentData) {
    return (
        <div>
            <div className="hover_effect_light hover_effect_transition flex border_bottom pt-2 pb-3 px-4">
                <ProfileImage 
                    active_user_window={true} 
                    username={data.user_username} 
                    url={data.user_img}
                />
                <div className="ml-4 w-full">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-base font-medium pr-1">{data.user_name}</span>
                            <span className="text-sm sub_text pr-1">@{data.user_username}</span>
                            <span className="text-sm sub_text">- 4m</span>
                        </div>
                        <SettingsWithBackground />
                    </div>
                    <div className="text-md block">
                        <p>{data.text}</p>
                    </div>
                    <BottomBar 
                        size="sm"
                        tweetData={{
                            _id: data._id,
                            userId: data.userId,
                            user_img: data.user_img,
                            user_name: data.user_name,
                            user_username: data.user_username,
                            text: data.text,
                            createdAt: data.createdAt
                        }} 
                        likes_length={data.likes}
                        retweet_length={data.retweets} 
                        comments_length={data.comments} 
                        chart={data.views} 
                        share={data.shares} 
                        isUserLiked={false} 
                        isUserRetweeted={false}/>
                </div>
            </div>
        </div>
    )
}