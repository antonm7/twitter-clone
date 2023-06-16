import { Chat } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';

export function Comments() {
    return (
        <div id={styles.comments_container} className={`cursor-pointer flex items-center`}>
            <Chat id={styles.comment}/>
            <span className="sub_text text-sm pl-2">4</span>
        </div>
    )
}