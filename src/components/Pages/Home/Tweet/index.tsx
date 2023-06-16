import { RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import { BottomBar } from "./BottomBar";
import { SettingsWithBackground } from "@/components/common/Icons/Settings";

export default function Tweet() {
    return (
        <div className="hover_effect_light hover_effect_transition flex border_bottom pt-2 pb-3 px-4">
            <RegularProfileImageCircle />
            <div className="px-3">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-base font-medium pr-1">Adam Wathan</span>
                        <span className="text-sm sub_text pr-1">@adamwathan</span>
                        <span className="text-sm sub_text">- 4m</span>
                    </div>
                    <SettingsWithBackground />
                </div>
                <div className="text-md block">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati et quia.</p>
                </div>
                <BottomBar />
            </div>
        </div>
    )
}