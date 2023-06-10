import {Calendar, Emoji, Gallery, Gif, Gps, List} from "./icons";

export default function BottomTab() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex py-4 pl-2">
                <Gallery />
                <Gif />
                <List />
                <Emoji />
                <Calendar />
                <Gps />
            </div>
        </div>
    )
}