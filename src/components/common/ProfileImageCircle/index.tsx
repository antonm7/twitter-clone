'use client';

import { useState } from "react";
import NoProfileImage from "./NoProfileImage";
import UserWindow from "./UserWindow";

type Props = {
    onClick?:(e:any) => void
    url?:string
    username?:string
    size?:'sm' | 'lg'
}

export function RegularProfileImageCircle({onClick}:Props) {
    return (
        <div className="relative min-w-[2.5rem] w-10 h-10 rounded-full" onClick={onClick}>
            <NoProfileImage />
        </div>
    )
}

export function ProfileImage({onClick,url,size,username}:Props) {
    const [visible, setVisible] = useState<boolean>(false)
    if(!url) {
        return (
            <div className="relative">
                <div onMouseEnter={() => setVisible(true)} 
                    onMouseLeave={() => setVisible(false)} 
                    className={`${size === 'lg' ? 'min-w-[5rem] w-20 h-20' : 'min-w-[2.5rem] w-10 h-10'} relative rounded-full`} onClick={onClick}>
                    <NoProfileImage size={size}/>
                </div>
                {visible ? <UserWindow username={username ? username : ''}/> : null}
            </div>
        )
    } else {
        return (
            <div className="relative">
                <div className={`${size === 'lg' ? 'min-w-[5rem] w-20 h-20' : 'min-w-[2.5rem] w-10 h-10'} relative rounded-full`} onClick={onClick}>
                    <NoProfileImage size={size}/>
                </div>
            </div>
        )
    }
}
