'use client';
import { ProfileImage, RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import styles from '../index.module.scss';
import { SettingsIcon } from "@/components/common/Icons/Settings";
import { useState } from "react";
import { TurnOnHiddenLayerWrapper } from "@/components/common/TurnOnHiddenLayerWrapper";
import { Line, OptionsWindow } from "@/components/common/OptionsWindow";
import { signOut } from "next-auth/react"

interface Props {
    name:string
    username:string
    img?:string
}

export default function User({name, username,img}:Props) {
    const [active, setActive] = useState<boolean>(false)

    return (
        <TurnOnHiddenLayerWrapper 
        className="relative flex w-full justify-between flex-nowrap mb-4 items-center p-4 py-2 rounded-3xl hover_effect hover_effect_transition "
            onActive={value => setActive(value)}>
            <div className="flex">
                <ProfileImage active_user_window={false} url={img ? img : undefined}/>
                <div className="pl-4">
                    <span className="font-bold text-sm block">{name}</span>
                    <span className={`block text-sm ${styles.sub_text}`}>@{username}</span>
                </div>
            </div>
            <SettingsIcon />
            <OptionsWindow width="17rem" translateY="-65%" translateX="0%" active={active}>
                <Line title={"Add an existing account"}/>
                <Line title={"Log out"} onClick={() => signOut()}/>
            </OptionsWindow>
        </TurnOnHiddenLayerWrapper>
    )
}