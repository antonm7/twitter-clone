'use client'
import styles from '../index.module.scss';
import { More } from '../Icons/More';
import SettingsWindow from './SettingsWindow';
import { useState } from 'react';
import { TurnOnHiddenLayerWrapper } from '@/components/common/TurnOnHiddenLayerWrapper';

export default function MoreSettings() {
    const [active, setActive] = useState<boolean>(false)

    return (
        <TurnOnHiddenLayerWrapper onActive={value => setActive(value)}>
            <div 
                className="relative flex 
                items-center pr-6 py-4 my-4 pl-4 w-min rounded-3xl hover_effect hover_effect_transition"
                id={styles.tab_wrapper}
            >
                <More />
                <h1 className={`text-xl`}>
                    More
                </h1>
                <SettingsWindow active={active}/>
            </div>
        </TurnOnHiddenLayerWrapper>
    )
}