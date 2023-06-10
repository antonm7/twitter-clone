import { RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import { Settings } from "./icons";
import { BottomBar } from "./BottomBar";

export default function Tweet() {
    return (
        <div className="flex border_bottom pt-2 pb-3 px-4">
            <RegularProfileImageCircle />
            <div className="px-3">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-base font-medium pr-1">Adam Wathan</span>
                        <span className="text-sm sub_text pr-1">@adamwathan</span>
                        <span className="text-sm sub_text">- 4m</span>
                    </div>
                    <Settings />
                </div>
                <div className="text-md block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati et quia.</p>
                </div>
                <BottomBar />
            </div>
        </div>
    )
}