'use client'
import { ChartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';

export function Chart() {
    return (
        <div id={styles.chart_container} className={`cursor-pointer flex items-center`}>
            <ChartIcon id={styles.chart}/>
            <span className={`sub_text text-sm pl-3`}>4</span>
        </div>
    )
}