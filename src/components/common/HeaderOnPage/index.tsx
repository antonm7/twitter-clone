'use client';

import { useRouter } from "next/navigation";
import HoverAroundIcon from "../HoverAroundIcon";
import { BackIcon } from "../Icons/CommonIcons";
import styles from './index.module.scss';

type DefaultHeaderProps = {
    title:string
    subTitle?:string
}

export function DefaultHeader({title, subTitle}:DefaultHeaderProps) {
    const router = useRouter()

    return (
        <div className="flex items-center py-[0.7rem]">
            <HoverAroundIcon bg="white" className="w-10 h-10" onClick={() => router.back()}>
                <BackIcon id={styles.icon}/>
            </HoverAroundIcon>
            <div className="pl-4">
                <h1 className="text-white font-bold text-lg">{title}</h1>
                <h4 id={styles.sub_title} className="text-xs">{subTitle}</h4>
            </div>
        </div>
    )
}
