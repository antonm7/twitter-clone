import { ProfileImage, RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import { BottomBar } from "./BottomBar";
import { SettingsWithBackground } from "@/components/common/Icons/Settings";
import { type FullTweetData } from "@/lib/types/tweets";

export default function Tweet({
    _id,
    userId,
    user_img,
    user_name,
    user_username,
    text,
    createdAt
}:FullTweetData) {
    return (
        <div className="hover_effect_light hover_effect_transition flex border_bottom pt-2 pb-3 px-4">
            <ProfileImage active_user_window={true} username={user_username} url={user_img}/>
            <div className="ml-4 w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-base font-medium pr-1">{user_name}</span>
                        <span className="text-sm sub_text pr-1">@{user_username}</span>
                        <span className="text-sm sub_text">- 4m</span>
                    </div>
                    <SettingsWithBackground />
                </div>
                <div className="text-md block">
                    <p>{text}</p>
                </div>
                <BottomBar tweetData={{
                     _id,
                     userId,
                     user_img,
                     user_name,
                     user_username,
                     text,
                     createdAt
                }}/>
            </div>
        </div>
    )
}