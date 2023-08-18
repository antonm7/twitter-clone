'use client'
import { ChartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";

type Props = {
    size:Sizes
}

export function Chart({size}:Props) {
    return (
        <div id={styles.chart_container} className={`cursor-pointer flex items-center w-min h-min`}>
            <ChartIcon id={styles.chart} size={size}/>
            <span className={`sub_text text-sm pl-3`}>4</span>
        </div>
    )
}