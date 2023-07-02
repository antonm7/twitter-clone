'use client';
import { RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import styles from '../index.module.scss';
import { SettingsIcon } from "@/components/common/Icons/Settings";
import UserSettings from "./UserSettings";
import { useEffect, useState } from "react";
import { useHiddenLayerStore } from "@/store/HiddenLayer";
import { useSession } from "next-auth/react";

interface Props {
    name:string
    username:string
}

export default function User({name, username}:Props) {
    const hiddenLayerStore = useHiddenLayerStore(state => state)
    const [active, setActive] = useState<boolean>(false)
    const session = useSession()

    const turnOnActive = () => {
        setActive(true)
        hiddenLayerStore.changeVisibility(true)
    }

    useEffect(() => {
        if(!hiddenLayerStore.visibility) setActive(false)
    },[hiddenLayerStore.visibility])


    return (
        <div onClick={() => turnOnActive()} className="flex w-full justify-between flex-nowrap mb-4 items-center p-4 py-2 rounded-3xl hover_effect hover_effect_transition ">
            <div className="flex">
                <RegularProfileImageCircle />
                <div className="pl-4">
                    <span className="font-bold text-sm block">{name}</span>
                    <span className={`block text-sm ${styles.sub_text}`}>@{username}</span>
                </div>
            </div>
            <SettingsIcon />
            <UserSettings active={active}/>
        </div>
    )
}