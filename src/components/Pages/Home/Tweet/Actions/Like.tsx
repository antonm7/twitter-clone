import { HeartIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";

type Props = {
    size:Sizes
    activeNumberOfLike?:boolean
}

export function Like({size, activeNumberOfLike}:Props) {
    return (
        <div id={styles.like_container} className={`cursor-pointer flex items-center`}>
            <HeartIcon size={size} id={styles.like}/>
            {activeNumberOfLike ? <span className={`sub_text text-sm pl-3`}>4</span> : null}
        </div>
    )
}