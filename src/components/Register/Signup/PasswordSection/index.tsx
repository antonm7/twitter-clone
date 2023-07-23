'use client';

import TwitterIcon from "@/components/Menu/TwitterIcon";
import { StyledInput } from "../../Inputs";
import styles from '../../index.module.scss';
import { useState } from "react";
import { signIn } from 'next-auth/react'
import ImageSection from "../ImageSection";

type Props = {
    email:string
    name:string
    username:string    
    active:boolean
}

async function signup_action({email, password,name, username}:
    {email:string,password:string,name:string,username:string}) {
    try {
        const request = await fetch(`/api/register/signup_action`,{
            method:'POST',
            body:JSON.stringify({
                email,
                password,
                name,
                username
            })
        })
        const response = await request.json()

        return response
    } catch(e) {
        throw new Error('Unexpected Error')
    }
}


export default function PasswordSection({email, name,active,username}:Props) {
    const [password, setPassword] = useState<string>('')
    const [confirmationPassword, setConfirmaionPassword] = useState<string>('')
    const [imageActive, setImageActive] = useState<boolean>(false)

    const navigate_next_screen = ():void => {
        if(password === confirmationPassword) {
            setImageActive(true)
        }
    }

    if(!active) return null
    
   return (
        <div className={`absolute z-20 w-full h-full bg-red-200 top-0 left-0 ${styles.container}`}>
            <ImageSection 
                active={imageActive}
                email={email}
                name={name}
                username={username}
                password={password}
            />
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
            <h1 className='text-2xl pb-4'>Write Your Password</h1>
            <StyledInput 
                type="password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <StyledInput 
                type="password"
                placeholder='Password'
                onChange={(e) => setConfirmaionPassword(e.target.value)}
            />
             <button 
                onClick={() => navigate_next_screen()}
                className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4" 
                id={styles.login}>
                    Create Your Profile
            </button>
        </div>
    </div>
   ) 
}