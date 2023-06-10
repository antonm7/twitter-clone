'use client'

import Link from "next/link";
import { Twitter } from "../Icons/Twitter";
import styles from '../index.module.scss';

export default function TwitterIcon() {
    return (
        <Link href={'/home'}>
            <div className="flex justify-center items-center px-4 py-4 mt-1 w-min rounded-full" id={styles.tab_wrapper}>
                <Twitter />
            </div>
        </Link>
    ) 
}