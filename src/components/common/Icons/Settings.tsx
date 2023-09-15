'use client'
import React, { ReactElement } from 'react';
import { useState } from 'react';
import { TurnOnHiddenLayerWrapper } from '../TurnOnHiddenLayerWrapper';
import styles from './index.module.scss';
import { HiDotsHorizontal } from "react-icons/hi";

type ChildProps = {
    active:boolean
}

type Props = {
    onClick?:() => void
    children:ReactElement<ChildProps>
    color?:'white'
}

export function SettingsWithBackground ({onClick, children}:Props) {
    const [active, setActive] = useState<boolean>(false)
    // Rendering any additional window
    // Here im adding the active state to the window props
    // Because I cant pass this actuve state from parent.
    const renderChildrenWithProp = () => {
        return React.Children.map(children,(child) => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, {active})
            }
            return child;
        })
    }

    return (
        <TurnOnHiddenLayerWrapper onActive={value => setActive(value)}>
            <div onClick={e => e.preventDefault()} id={styles.wrapper} className='h-8 w-8 flex items-center justify-center rounded-full'>
                <HiDotsHorizontal id={styles.icon} className='text-base sub_text'/>
            </div>
            {renderChildrenWithProp()}
        </TurnOnHiddenLayerWrapper>
    )
}

export function SettingsIcon({onClick,color}:Props) {
    return <HiDotsHorizontal onClick={onClick} className={`text-base ${color === 'white' ? 'text-white' : 'sub_text'}`}/>
}
