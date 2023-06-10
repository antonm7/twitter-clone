import StyledButton from "@/components/common/StyledButton";
import {Calendar, Emoji, Gallery, Gif, Gps, List} from "./icons";

export default function BottomTab() {
    return (
        <div className="flex justify-between items-center pt-4 pb-2">
            <div className="flex pl-2">
                <Gallery />
                <Gif />
                <List />
                <Emoji />
                <Calendar />
                <Gps />
            </div>
            <StyledButton title={'Tweet'} height={'2.4rem'}/>
        </div>
    )
}