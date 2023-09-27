'use client'
import { useHiddenLayerBackground, useHiddenLayerChangeVisibility, useHiddenLayerVisibility } from '@/store/HiddenLayer';
import { MouseEventHandler, useRef } from 'react';
import { useRegisterWindowChangeLoginVisibility, useRegisterWindowChangeSignupVisibility, 
    useRegisterWindowLoginVisibility, useRegisterWindowState } from '@/store/registerWindow';
import React from 'react';

function HiddenLayer() {
    const componentRef = useRef<any>(null)
    
    const visibility = useHiddenLayerVisibility()
    const background = useHiddenLayerBackground()
    const changeVisibility = useHiddenLayerChangeVisibility()

    const loginVisibility = useRegisterWindowLoginVisibility()
    const signupVisibility = useRegisterWindowState(state => state.signupVisibility)
    const changeLoginVisibility = useRegisterWindowChangeLoginVisibility()
    const changeSignupVisibility = useRegisterWindowChangeSignupVisibility()

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