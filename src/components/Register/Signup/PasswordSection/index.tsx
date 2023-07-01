'use client';

import TwitterIcon from "@/components/Menu/TwitterIcon";
import { StyledInput } from "../../Inputs";
import styles from '../../index.module.scss';
import { useState } from "react";
import { signIn } from 'next-auth/react'

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

    const action = async () => {
        try {
            const data = await signup_action({email,name,username,password})
            if(data.error) {
                alert(data.error)
            } else {
                const singIn_data = await signIn('credentials',{
                    redirect:false,
                    email,
                    password
                })
                if(singIn_data?.ok) {
                    console.log('signed user', singIn_data)
                } else {
                    console.log(singIn_data)
                }
            }
        } catch(e) {
            console.log(e)
            alert('Unexpected Error')
        }
    }

    if(!active) return null
   return (
        <div className={`absolute z-20 w-full h-full bg-red-200 top-0 left-0 ${styles.container}`}>
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
                onClick={() => action()}
                className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4" 
                id={styles.login}>
                    Create Your Profile
            </button>
        </div>
    </div>
   ) 
}