'use client';

import { useHiddenLayerStore } from "@/store/HiddenLayer"
import { useRegisterWindowState } from "@/store/registerWindow"
import { useEffect } from "react"
import Login from "./Login"

export default function Register() {
    const loginVisibility = useRegisterWindowState(state => state.loginVisibility)
    const signupVisibility = useRegisterWindowState(state => state.signupVisibility)
    const changeHiddenLayerVisibility = useHiddenLayerStore(state => state.changeVisibility)

    useEffect(() => {
        if(!loginVisibility && !signupVisibility) {
            changeHiddenLayerVisibility(false)
        } else {
            changeHiddenLayerVisibility(true)

        }
    },[loginVisibility,signupVisibility])
    

    if(loginVisibility) return <Login />

    if(signupVisibility) return <Login />

    return null
}