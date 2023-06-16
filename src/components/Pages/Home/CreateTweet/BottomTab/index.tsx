import StyledButton from "@/components/common/StyledButton";
import {Calendar, Emoji, Gallery, Gif, Gps, List} from "./icons";
import HoverAroundIcon from "@/components/common/HoverAroundIcon";

export default function BottomTab() {
    return (
        <div className="flex justify-between items-center pt-4 pb-2">
            <div className="flex pl-2">
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <Gallery />
                </HoverAroundIcon>
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <Gif />
                </HoverAroundIcon>
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <List />
                </HoverAroundIcon>
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <Emoji />
                </HoverAroundIcon>
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <Calendar />
                </HoverAroundIcon>
                <HoverAroundIcon className="mr-1 h-10 w-10">
                    <Gps />
                </HoverAroundIcon>
            </div>
            <StyledButton title={'Tweet'} height={'2.4rem'}/>
        </div>
    )
}