import { RetweetIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';

export function Retweet() {
    return (
        <div id={styles.retweet_container} className={`cursor-pointer flex items-center`}>
            <RetweetIcon id={styles.retweet}/>
            <span className={`sub_text text-sm pl-3`}>4</span>
        </div>
    )
}