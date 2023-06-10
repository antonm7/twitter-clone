import TextArea from "@/components/Pages/Home/CreateTweet/TextArea";
import BottomTab from "./BottomTab";
import Hr from "@/components/common/Hr";
import {RegularProfileImageCircle} from "@/components/common/ProfileImageCircle";

export default function CreateTweet() {

    return (
        <div className="w-full min-h-fit flex border_bottom">
            <div className="w-20 h-auto flex justify-center pt-3">
                <RegularProfileImageCircle />
            </div>
            <div className="w-full pr-8">
               <TextArea />
               <BottomTab />
            </div>
        </div>
    )
}