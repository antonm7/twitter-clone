'use client'

import TwitterIcon from '@/components/Menu/TwitterIcon';
import styles from '../index.module.scss';
import { StyledInput } from '../Inputs';
import { useEffect, useState } from 'react';
import UsernameSection from './UsernameSection';
import { Xmark } from '@/components/common/Icons/CommonIcons';
import HoverAroundIcon from '@/components/common/HoverAroundIcon';
import { useHiddenLayerStore } from '@/store/HiddenLayer';
import { useRegisterWindowState } from '@/store/registerWindow';

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
    const loginVisibility = useRegisterWindowState(state => state.changeLoginVisibility)
    const signupVisibility = useRegisterWindowState(state => state.changeSignupVisibility)
    const changeHiddenLayerVisibility = useHiddenLayerStore(state => state.changeVisibility)
    
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [validEmail, setValidEmail] = useState<"empty" | "valid" | "inValid" | "inUse">("empty")
    const [usernameActive, setUsernameActive] = useState<boolean>(false)

    useEffect(() => {
        const delayFn = setTimeout(async () => {
            if(email === '') {
                setValidEmail("empty")
                return
            }

            const re =
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            const validate_email =  re.test(email)

            if(!validate_email) {
                setValidEmail('inValid')
                return
            }

            try {
                const exists = await email_check(email)
                if(exists) {
                    setValidEmail("inUse")
                } else {
                    setValidEmail("valid")
                }
            } catch(e) {
                console.error('Unexpected Error',e)
            }
        },500)
        return () => clearTimeout(delayFn)
    },[email])

    const navigate_next_screen = ():void => {
        if(validEmail === 'valid') {
            setUsernameActive(true)
        }
    }

    const close = ():void => {
        loginVisibility(false)
        signupVisibility(false)
        changeHiddenLayerVisibility(false)
    }

    return (
        <div className={`fixed ${styles.container}`}>
            <HoverAroundIcon onClick={() => close()} className="absolute right-0 top-3 mr-1 h-10 w-10" bg={'white'}>
                <Xmark id={styles.xMark}/>
            </HoverAroundIcon>
            <UsernameSection 
                active={usernameActive}
                email={email}
                name={name}
            />
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
                <h1 className='text-2xl pb-4'>Create New Account</h1>
                <StyledInput 
                    status={validEmail === 'empty' ? 'normal'
                     : validEmail === 'valid' ? 'success' :
                      validEmail === 'inValid' ? 'error' : 'normal'}
                    placeholder='Phone or Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='pt-4'>
                    <StyledInput 
                        placeholder='Your Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button 
                    disabled={validEmail !== 'valid'}
                    onClick={() => navigate_next_screen()}
                    className={`${validEmail === 'valid' ? 'bg-white' : 'bg-gray-300'} w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4`} 
                    id={styles.login}>
                        Continue
                    </button>
            </div>
        </div>
    )
}