'use client';

import { ProfileImage } from '..';
import { StyledButtonWhite } from '../../StyledButton';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';

type Props = {
    username:string
}

type UserData = {
    username:string,
    name:string,
    bio:string,
    following:string[],
    followers:string[],
}

export default function UserWindow({username}:Props) {
    const [userData, setUserData] = useState<UserData | null>(null)

    const get_user_data = async () => {
        try {
            const req = await fetch(`/api/users/user_window_data?username=${username}`,{
                method:"GET"
            })
            if(req.ok) {
                const res = await req.json()
                setUserData(res.data)
                console.log(res.data)
            } else {
                throw new Error('Unexpected Error')
            }
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        get_user_data()
    },[])

    if(!userData) return null

    return (
        <div className="absolute tab_border min-w-[22rem] h-auto p-4 rounded-xl z-50" id={styles.wrapper}>
            <div className='flex justify-between'>
                <ProfileImage size='lg'/>
                <StyledButtonWhite onClick={() => null} title='Follow'/>
            </div>
            <h1 className='font-bold text-xl pt-2'>{userData.name}</h1>
            <h3 className=' text-sm sub_text'>@{userData.username}</h3>
            <p className='pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In impedit totam commodi illum libero cum voluptatem praesentium mollitia eveniet facilis tempore minus repudiandae, molestiae iusto veniam dolor.</p>
            <div className='flex pt-4'>
                <p className='text-white text-xs font-semibold pr-4'>
                    990 <span className=' sub_text font-normal'>Following</span>
                </p>
                <p className='text-white text-xs font-semibold'>
                    11 <span className=' sub_text font-normal'>Followers</span>
                </p>
            </div>
        </div>
    )
}