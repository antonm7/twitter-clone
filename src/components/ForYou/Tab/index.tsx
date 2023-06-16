import styles from '../index.module.scss';
import { SettingsWithBackground } from "@/components/common/Icons/Settings";

type Props = {
    bottom?:boolean
}

export default function Tab({bottom}:Props) {
    return (
        <div className={`w-full h-min p-4 py-1 hover_effect hover_effect_transition ${bottom ? styles.bottom : ''}`}>
            <div className="flex justify-between items-center">
                <span className="text-sm" id={styles.sub_title}>Sports - Trending</span>
                <SettingsWithBackground />
            </div>
            <span className="font-medium block">Davies</span>
            <span className="text-sm" id={styles.sub_title}>13.8K Tweets</span>
        </div>
    )
}