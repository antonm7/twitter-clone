'use client'
import styles from './index.module.scss';
import { HiDotsHorizontal } from "react-icons/hi";

type Props = {
    onClick?:() => void
    color?:'white'
}

export function SettingsWithBackground ({onClick}:Props) {
    return (
        <div onClick={onClick} id={styles.wrapper} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <HiDotsHorizontal id={styles.icon} className='text-base sub_text'/>
        </div>
    )
}

export function SettingsIcon({onClick,color}:Props) {
    return <HiDotsHorizontal onClick={onClick} className={`text-base ${color === 'white' ? 'text-white' : 'sub_text'}`}/>
}
