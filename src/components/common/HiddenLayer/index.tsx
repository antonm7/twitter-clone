'use client'
import { useHiddenLayerStore } from '@/store/HiddenLayer';
import { useRegisterWindowState } from '@/store/registerWindow';
import { MouseEventHandler, useRef } from 'react';
import React from 'react';

function HiddenLayer() {
    const componentRef = useRef<any>(null)
    
    const visibility = useHiddenLayerStore(state => state.visibility)
    const background = useHiddenLayerStore(state => state.background)
    const changeVisibility = useHiddenLayerStore(state => state.changeVisibility)

    const loginVisibility = useRegisterWindowState(state => state.loginVisibility)
    const signupVisibility = useRegisterWindowState(state => state.signupVisibility)
    const changeLoginVisibility = useRegisterWindowState(state => state.changeLoginVisibility)
    const changeSignupVisibility = useRegisterWindowState(state => state.changeSignupVisibility)

    // Function to identify when click event happens outside
    // of the div element.
    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if ( componentRef.current && event.target instanceof Node &&
            !componentRef.current.contains(event.target)) {
            return
        } else {
            changeVisibility(false)
            if(loginVisibility) {
                changeLoginVisibility(false)
            } else if(signupVisibility) {
                changeSignupVisibility(false)
            }
        }
    };
    
    if(!visibility) return null

    return (
        <div 
            onClick={handleClick}
            className={`fixed left-0 top-0 w-screen h-screen z-40 
            ${background ? 'bg-white opacity-20' : 'bg-transparent'}`}
        />  
    )
}

export default React.memo(HiddenLayer)


