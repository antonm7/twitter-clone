'use client'

import TwitterIcon from '@/components/Menu/TwitterIcon';
import styles from '../index.module.scss';
import { StyledInput } from '../Inputs';

export default function Login() {
    return (
        <div className={`fixed ${styles.container}`}>
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
                <h1 className='text-2xl pb-4'>Login To Twitter</h1>
                <StyledInput placeholder='Phone or Email' onChange={(e) => console.log(e)}/>
                <button className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4" id={styles.login}>Login</button>
            </div>
        </div>
    )
}