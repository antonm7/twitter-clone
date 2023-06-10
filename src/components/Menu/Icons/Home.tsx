'use client'
import styles from './index.module.scss'
import { AiFillHome, AiOutlineHome } from "react-icons/ai/index"

export function Home() {
    return <AiOutlineHome className={styles.global_styles} />
}

export function ActiveHome() {
    return <AiFillHome className={styles.global_styles}/>
} 