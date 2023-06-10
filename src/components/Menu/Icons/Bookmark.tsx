'use client'
import { AiFillBook, AiOutlineBook } from 'react-icons/ai/index'
import styles from './index.module.scss'

export function Bookmark() {
    return <AiOutlineBook className={styles.global_styles}/>
}

export function ActiveBookmark() {
    return <AiFillBook className={styles.global_styles} />
}