import { ShareIcon } from "../icons";
import styles from './index.module.scss';

export function Share() {
    return (
        <div className={`flex items-center`}>
            <ShareIcon id={styles.share}/>
        </div>
    )
}