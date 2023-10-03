'use client'

import TwitterIcon from '@/components/Menu/TwitterIcon';
import styles from '../index.module.scss';
import { StyledInput } from '../Inputs';
import HoverAroundIcon from '@/components/common/HoverAroundIcon';
import { Xmark } from '@/components/common/Icons/CommonIcons';
import { useRegisterWindowState } from '@/store/registerWindow';
import { useHiddenLayerStore } from '@/store/HiddenLayer';

export default function Login() {
    const loginVisibility = useRegisterWindowState(state => state.changeLoginVisibility)
    const changeHiddenLayerVisibility = useHiddenLayerStore(state => state.changeVisibility)

    const close = ():void => {
        loginVisibility(false)
        changeHiddenLayerVisibility(false)
    }

    return (
        <div className={`fixed ${styles.container} border_left border_right border_top border_bottom`}>
            <HoverAroundIcon onClick={() => close()} className="absolute right-0 top-3 mr-1 h-10 w-10" bg={'white'}>
                <Xmark id={styles.xMark}/>
            </HoverAroundIcon>
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