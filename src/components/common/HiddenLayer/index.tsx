'use client'
import { useHiddenLayerStore } from '@/store/HiddenLayer';
import styles from './index.module.scss';
import { MouseEventHandler, useEffect, useRef } from 'react';
import { useRegisterWindowState } from '@/store/registerWindow';

export default function HiddenLayer() {
    const hiddenLayerStore = useHiddenLayerStore(state => state)
    const loginVisibility = useRegisterWindowState(state => state)
    const signupVisibility = useRegisterWindowState(state => state)
    const componentRef = useRef<any>(null)

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if ( componentRef.current && event.target instanceof Node &&
            !componentRef.current.contains(event.target)) {
            return
        } else {
            hiddenLayerStore.changeVisibility(false)
            if(loginVisibility.loginVisibility) {
                loginVisibility.changeLoginVisibility(false)
            } else if(signupVisibility.signupVisibility) {
                signupVisibility.changeSignupVisibility(false)
            }
        }
    };
    
    if(!hiddenLayerStore.visibility) return null

    return (
        <div 
            onClick={handleClick}
            id={styles.wrapper} 
            className={`fixed w-screen h-screen z-40 
            ${hiddenLayerStore.background ? 'bg-white opacity-20' : 'bg-transparent'}`}
        />
    )
}