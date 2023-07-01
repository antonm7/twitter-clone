'use client';

import { useRegisterWindowState } from "@/store/registerWindow"
import Login from "./Login"
import Signup from "./Signup";

export default function Register() {
    const loginVisibility = useRegisterWindowState(state => state.loginVisibility)
    const signupVisibility = useRegisterWindowState(state => state.signupVisibility)
    
    if(loginVisibility) return <Login />

    if(signupVisibility) return <Signup />

    return null
}