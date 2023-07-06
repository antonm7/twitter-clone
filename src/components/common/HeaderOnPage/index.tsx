import HoverAroundIcon from "../HoverAroundIcon";
import { BackIcon } from "../Icons/CommonIcons";
import styles from './index.module.scss';

type Props = {
    title:string
    subTitle?:string
}

export default function HeaderOnPage({title, subTitle}:Props) {
    return (
        <div className="flex items-center py-[0.7rem] px-4">
            <HoverAroundIcon bg="white" className="w-10 h-10">
                <BackIcon id={styles.icon}/>
            </HoverAroundIcon>
            <div className="pl-4">
                <h1 className="text-white font-bold text-lg">{title}</h1>
                <h4 id={styles.sub_title} className="text-xs">{subTitle}</h4>
            </div>
        </div>
    )
}