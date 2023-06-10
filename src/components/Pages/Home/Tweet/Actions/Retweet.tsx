import { RetweetIcon } from "../icons";
import styles from './index.module.scss';

export function Retweet() {
    return (
        <div className={`flex items-center`}>
            <RetweetIcon id={styles.retweet}/>
            <span className="sub_text text-sm pl-3">4</span>
        </div>
    )
}