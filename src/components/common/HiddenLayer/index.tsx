'use client'
import { useHiddenLayerStore } from '@/store/HiddenLayer';
import styles from './index.module.scss';
import { MouseEventHandler, useRef } from 'react';

export default function HiddenLayer() {
    const hiddenLayerStore = useHiddenLayerStore(state => state)
    const componentRef = useRef<any>(null)

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if ( componentRef.current && event.target instanceof Node &&
            !componentRef.current.contains(event.target)) {
            return
        } else {
            hiddenLayerStore.changeVisibility(false)
        }
    };

    if(!hiddenLayerStore.visibility) return null

    return (
        <div 
            onClick={handleClick}
            id={styles.wrapper} 
            className="fixed w-screen h-screen bg-transparent z-40"
        />
    )
}