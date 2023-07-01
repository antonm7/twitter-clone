'use client';

import TwitterIcon from "@/components/Menu/TwitterIcon";
import { StyledInput } from "../../Inputs";
import styles from '../../index.module.scss';
import { useEffect, useState } from "react";
import PasswordSection from "../PasswordSection";

type Props = {
    email:string
    name:string
    active:boolean
}

async function username_check(username:string) {
    try {
        const request = await fetch(`/api/register/username_check?username=${username}`,{method:'GET'})
        const response = await request.json()
        return response.exists
    } catch(e) {
        console.log('error',e)
        throw new Error('Unexpected Error')
    }
}

export default function UsernameSection({email, name,active}:Props) {
    const [validUsername, setValidUsername] = useState<"empty" | "valid" | "inValid" | "inUse">("empty")
    const [username, setUsername] = useState<string>('')
    const [passwordActive, setPasswordActive] = useState<boolean>(false)

    useEffect(() => {
        if(!username) return 
        const delayFn = setTimeout(async () => {
            try {
                const exists = await username_check(username)
                if(exists) {
                    setValidUsername("inUse")
                } else {
                    setValidUsername("valid")
                }
            } catch(e) {
                console.error('Unexpected Error',e)
            }
        },500)
        return () => clearTimeout(delayFn)
    },[username])

    const navigate_next_screen = ():void => {
        if(validUsername === 'valid') {
            setPasswordActive(true)
        }
    }

   if(!active) return null
   return (
        <div className={`absolute z-20 w-full h-full bg-red-200 top-0 left-0 ${styles.container}`}>
            <PasswordSection 
                active={passwordActive}
                email={email}
                name={name}
                username={username}
            />
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
            <h1 className='text-2xl pb-4'>Write Your Username</h1>
            <StyledInput 
                status={validUsername === 'empty' ? 'normal'
                    : validUsername === 'valid' ? 'success' :
                    validUsername === 'inValid' ? 'error' : 'normal'}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
            />
             <button 
                onClick={() => navigate_next_screen()}
                className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4" 
                id={styles.login}>
                    Continue
            </button>
        </div>
    </div>
   ) 
}