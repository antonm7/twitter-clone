'use client'
import { BookmarkIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";

type Props = {
    size:Sizes
    activeNumberOfBookmark?:boolean
}

export function Bookmark({size,activeNumberOfBookmark}:Props) {
    return (
        <div id={styles.comments_container} className={`cursor-pointer flex items-center w-min h-min`}>
            <BookmarkIcon id={styles.comment} size={size}/>
            {activeNumberOfBookmark ? <span className={`sub_text text-sm pl-3`}>4</span> : null}
        </div>
    )
}