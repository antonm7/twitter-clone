'use client'
import styles from './index.module.scss'
import { FaRegUser, FaUser} from "react-icons/fa/index"

export function Profile() {
    return <FaRegUser className={styles.global_styles} />
}

export function ActiveProfile() {
    return <FaUser className={styles.global_styles}/>
} 