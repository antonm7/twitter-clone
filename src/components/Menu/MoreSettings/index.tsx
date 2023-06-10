'use client'
import styles from '../index.module.scss';
import { More } from '../Icons/More';
import SettingsWindow from './SettingsWindow';
import { useEffect, useState } from 'react';
import { useHiddenLayerStore } from '@/store/HiddenLayer';

export default function MoreSettings() {
    const [active, setActive] = useState<boolean>(false)
    const hiddenLayerStore = useHiddenLayerStore(state => state)

    const turnOnActive = () => {
        setActive(true)
        hiddenLayerStore.changeVisibility(true)
    }

    useEffect(() => {
        if(!hiddenLayerStore.visibility) {
            setActive(false)
        }
    },[hiddenLayerStore.visibility])

    return (
        <div 
            onClick={() => turnOnActive()} 
            className="relative flex items-center pl-4 pr-6 py-4 my-4 w-min rounded-3xl"
            id={styles.tab_wrapper}
        >
            <More />
            <h1 className={`text-xl`}>
                More
            </h1>
            <SettingsWindow active={active}/>
        </div>
    )
}