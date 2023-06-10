'use client'
import { AiFillMail, AiOutlineMail } from 'react-icons/ai/index'
import styles from './index.module.scss'

export function Messages() {
    return <AiOutlineMail className={styles.global_styles}/>
}

export function ActiveMessages() {
    return <AiFillMail className={styles.global_styles} />
}