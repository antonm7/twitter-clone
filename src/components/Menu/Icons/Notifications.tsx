'use client'
import styles from './index.module.scss'
import {BsBell} from 'react-icons/bs/index'
import {BsBellFill} from 'react-icons/bs/index'

export function Notifications() {
    return <BsBell className={styles.global_styles}/>
}

export function ActiveNotifications() {
    return <BsBellFill className={styles.global_styles} />
}