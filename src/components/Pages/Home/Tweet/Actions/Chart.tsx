import { ChartIcon } from "../icons";
import styles from './index.module.scss';

export function Chart() {
    return (
        <div className={`flex items-center`}>
            <ChartIcon id={styles.chart}/>
            <span className="sub_text text-sm pl-3">4</span>
        </div>
    )
}