import TextArea from "@/components/Pages/Home/CreateTweet/TextArea";
import BottomTab from "./BottomTab";
import Hr from "@/components/common/Hr";

export default function CreateTweet() {

    return (
        <div className="w-full min-h-fit flex border-b-2 border-gray-200">
            <div className="w-12 h-auto ">
                O
            </div>
            <div className="w-full pr-8">
               <TextArea />
               <Hr />
                <BottomTab />
            </div>
        </div>
    )
}