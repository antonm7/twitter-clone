import { ShareIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';

export function Share() {
    return (
        <div className={`cursor-pointer flex items-center`}>
            <ShareIcon id={styles.share}/>
        </div>
    )
}