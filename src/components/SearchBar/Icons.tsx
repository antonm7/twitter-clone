'use client'
import styles from './index.module.scss';
import { BiSearch } from 'react-icons/bi/index';

export function SearchIcon() {
    return <BiSearch id={styles.icon} className='absolute top-[0.8rem] left-4 text-xl'/>
}