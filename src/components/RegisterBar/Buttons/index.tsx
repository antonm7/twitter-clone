'use client';

import { useRegisterWindowState } from '@/store/registerWindow';
import styles from './index.module.scss';

export function LoginButton() {
    const changeLoginVisibility = useRegisterWindowState(state => state.changeLoginVisibility)

    const openLoginWindow = () => {
        changeLoginVisibility(true)
    }

    return (
        <button onClick={() => openLoginWindow()} className="w-24 h-10 bg-transparent text-white font-bold rounded-3xl text-sm mr-4" id={styles.login}>Login</button>
    )
}

export function SignupButton() {
    const changeSignupVisibility = useRegisterWindowState(state => state.changeSignupVisibility)
    
    const openSignupWindow = () => {
        changeSignupVisibility(true)
    }

    return (
        <button onClick={() => openSignupWindow()} className='w-24 h-10 bg-white text-black font-bold rounded-3xl text-sm'>Register</button>
    )
}