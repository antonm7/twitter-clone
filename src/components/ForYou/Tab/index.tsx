import { SettingsIcon } from "./SettingsIcon";
import styles from '../index.module.scss';

export default function Tab() {
    return (
        <div className="w-full h-min p-4" id={styles.tab_wrapper}>
            <div className="flex justify-between items-center">
                <span className="text-sm" id={styles.sub_title}>Sports - Trending</span>
                <SettingsIcon />
            </div>
            <span className="font-medium block">Davies</span>
            <span className="text-sm" id={styles.sub_title}>13.8K Tweets</span>
        </div>
    )
}