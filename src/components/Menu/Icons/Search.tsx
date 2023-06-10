'use client'
import styles from './index.module.scss'
import {FiSearch} from 'react-icons/fi/index'
import {TfiSearch} from 'react-icons/tfi/index'

export function Search() {
    return <TfiSearch className={styles.global_styles}/>
}

export function ActiveSearch() {
    return <FiSearch className={styles.global_styles} />
}