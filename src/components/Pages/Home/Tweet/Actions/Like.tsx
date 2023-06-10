import { HeartIcon } from "../icons";
import styles from './index.module.scss';
export function Like() {
    return (
        <div className={`flex items-center`}>
            <HeartIcon id={styles.like}/>
            <span className="sub_text text-sm pl-3">4</span>
        </div>
    )
}