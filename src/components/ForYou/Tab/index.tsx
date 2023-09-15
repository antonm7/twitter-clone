'use client'

import { useEffect, useState } from 'react';
import styles from '../index.module.scss';
import { SettingsWithBackground } from "@/components/common/Icons/Settings";
import { useHiddenLayerStore } from '@/store/HiddenLayer';
import TabSettings from './TabSettings';
import { TweetOptions } from '@/components/Pages/Home/Tweet/TweetOptions';

type Props = {
    bottom?:boolean
}

export default function Tab({bottom}:Props) {
    const [active, setActive] = useState<boolean>(false)

    const hiddenLayerStore = useHiddenLayerStore(state => state)

    const turnOnActive = () => {
        setActive(true)
        hiddenLayerStore.changeVisibility(true)
    }

    useEffect(() => {
        if(!hiddenLayerStore.visibility) setActive(false)
    },[hiddenLayerStore.visibility])

    return (
        <div className={`w-full h-min pl-4 pr-2 py-2 hover_effect hover_effect_transition ${bottom ? styles.bottom : ''}`}>
            <div className="flex justify-between items-center">
                <span className="text-sm" id={styles.sub_title}>Sports - Trending</span>
                {/* <SettingsWithBackground onClick={() => turnOnActive()}>
                    <TweetOptions active={active}/>
                </SettingsWithBackground> */}
            </div>
            <span className="font-medium block">Davies</span>
            <span className="text-sm" id={styles.sub_title}>13.8K Tweets</span>
            <TabSettings active={active}/>
        </div>
    )
}