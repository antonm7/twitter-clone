'use client';
import { SettingsIcon } from '@/components/common/Icons/Settings';
import styles from '../index.module.scss';
import { useState } from 'react';
import { TurnOnHiddenLayerWrapper } from '@/components/common/TurnOnHiddenLayerWrapper';
import { Line, OptionsWindow } from '@/components/common/OptionsWindow';
import { BsChatLeftDots, BsExclamationOctagon, BsFlag, BsLink, BsMicMute } from 'react-icons/bs';

export default function OptionsCircle() {
    const [active, setActive] = useState<boolean>(false)
    return (
        <TurnOnHiddenLayerWrapper onActive={value => setActive(value)}>
            <div
                className={`relative h-[2.4rem] w-[2.4rem] rounded-full flex items-center justify-center ${styles.styled_circle}`}>
                <SettingsIcon color="white"/>
                <OptionsWindow translateY="42%" translateX='-92%' active={active}>
                    <Line icon={<BsChatLeftDots className='text-lg'/>} title={'Turn off Retweets'} />
                    <Line icon={<BsLink className='text-lg'/>} title={'Copy link to profile'} />
                    <Line icon={<BsMicMute className='text-lg'/>} title={'Mute @name'} />
                    <Line icon={<BsExclamationOctagon className='text-lg'/>} title={'Block @name'} />
                    <Line icon={<BsFlag className='text-lg'/>} title={'Report @name'} />
                </OptionsWindow>
            </div>
        </TurnOnHiddenLayerWrapper>
    )
}