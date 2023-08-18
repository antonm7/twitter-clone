import { RetweetIcon } from "@/components/common/Icons/Actions";
import styles from './index.module.scss';
import { Sizes } from "@/lib/types/common";

type Props = {
    size:Sizes
    activeNumberOfRetweets?:boolean
}

export function Retweet({size,activeNumberOfRetweets}:Props) {
    return (
        <div id={styles.retweet_container} className={`cursor-pointer flex items-center`}>
            <RetweetIcon id={styles.retweet} size={size}/>
            {activeNumberOfRetweets ? <span className={`sub_text text-sm pl-3`}>4</span> : null}
        </div>
    )
}