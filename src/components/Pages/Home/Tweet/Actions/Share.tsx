import { ShareIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";

export function Share({size}:{size:Sizes}) {
    return (
        <div className={`cursor-pointer flex items-center`}>
            <ShareIcon size={size} id={styles.share}/>
        </div>
    )
}