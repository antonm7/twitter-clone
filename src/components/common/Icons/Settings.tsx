'use client'
import styles from './index.module.scss';
import { HiDotsHorizontal } from "react-icons/hi";

export function SettingsWithBackground () {
    return (
        <div id={styles.wrapper} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <HiDotsHorizontal id={styles.icon} className='text-base sub_text'/>
        </div>
    )
}

export function SettingsIcon() {
    return <HiDotsHorizontal className='text-base sub_text'/>
}
