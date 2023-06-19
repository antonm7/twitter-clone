'use client'

import { useEffect } from 'react';
import styles from '../index.module.scss';
import { useRegisterWindowState } from "@/store/registerWindow"
import { useHiddenLayerStore } from '@/store/HiddenLayer';

export default function Login() {
    const visibility = useRegisterWindowState(state => state.visibility)
    const changeHiddenLayerVisibility = useHiddenLayerStore(state => state.changeVisibility)

    useEffect(() => {
        if(!visibility) {
            changeHiddenLayerVisibility(false)
        } else {
            changeHiddenLayerVisibility(true)
        }
    },[visibility])
    
    if(!visibility) return null


    return (
        <div className={`fixed ${styles.container}`}>
            welcomedsadsa
        </div>
    )
}