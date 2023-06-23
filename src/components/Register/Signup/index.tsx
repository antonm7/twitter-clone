'use client'

import TwitterIcon from '@/components/Menu/TwitterIcon';
import styles from '../index.module.scss';
import { StyledInput } from '../Inputs';
import { useEffect, useState } from 'react';
import axios from 'axios'

async function email_check(email:string) {
    try {
        const request = await fetch(`/api/register/email_check?email=${email}`,{method:'GET'})
        const response = await request.json()

        return response.exists
    } catch(e) {
        console.log('error',e)
        throw new Error('Unexpected Error')
    }
}

export default function Signup() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [validEmail, setValidEmail] = useState<"empty" | "valid" | "unvalid">("empty")

    useEffect(() => {
        const delayFn = setTimeout(async () => {
            if(email === '') {
                setValidEmail("empty")
                return
            }
            try {
                const exists = await email_check(email)
                if(exists) {
                    setValidEmail("unvalid")
                } else {
                    setValidEmail("valid")
                }
            } catch(e) {
                console.error('dsadsadsa',e)
            }
        },500)
        return () => clearTimeout(delayFn)
    },[email])

    return (
        <div className={`fixed ${styles.container}`}>
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
                <h1 className='text-2xl pb-4'>Create New Account</h1>
                <StyledInput placeholder='Phone or Email' onChange={(e) => setEmail(e.target.value)}/>
                <div className='pt-4'>
                    <StyledInput placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
                </div>
                <button className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4" id={styles.login}>Login</button>
            </div>
        </div>
    )
}