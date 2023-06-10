import { Chat } from "../icons";
import styles from './index.module.scss';

export function Comments() {
    return (
        <div className={`flex items-center`}>
            <Chat id={styles.comment}/>
            <span className="sub_text text-sm pl-2">4</span>
        </div>
    )
}