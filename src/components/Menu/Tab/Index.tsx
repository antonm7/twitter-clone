'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../index.module.scss';

type Props = {
    title:string
    Icon:JSX.Element
    ActiveIcon:JSX.Element
    to:string
}

export default function Tab({
    title,
    Icon,
    to,
    ActiveIcon
}:Props) {
    const pathname = usePathname()

    return (
        <Link href={to}>
            <div className="flex items-center pl-4 pr-6 py-4 my-4 w-min rounded-3xl" id={styles.tab_wrapper}>
                {pathname === to ? ActiveIcon : Icon}
                <h1 className={`text-xl ${pathname === to ? 'font-bold' : 'font-base'}`}>
                    {title}
                </h1>
            </div>
        </Link>
    )
}