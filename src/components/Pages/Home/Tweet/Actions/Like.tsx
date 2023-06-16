import { HeartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
export function Like() {
    return (
        <div id={styles.like_container} className={`cursor-pointer flex items-center`}>
            <HeartIcon id={styles.like}/>
            <span className={`sub_text text-sm pl-3`}>4</span>
        </div>
    )
}