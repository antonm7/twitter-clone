'use client'
import { RegularProfileImageCircle } from "@/components/common/ProfileImageCircle";
import styles from '../index.module.scss';
import { SettingsIcon } from "@/components/common/Icons/Settings";
import UserSettings from "./UserSettings";
import { useEffect, useState } from "react";
import { useHiddenLayerStore } from "@/store/HiddenLayer";

export default function User() {
    const [active, setActive] = useState<boolean>(false)

    const hiddenLayerStore = useHiddenLayerStore(state => state)

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
                    <span className="font-bold text-sm block">a_n_t_o_n</span>
                    <span className={`block text-sm ${styles.sub_text}`}>@a_n_t_o_n_mig</span>
                </div>
            </div>
            <SettingsIcon />
            <UserSettings active={active}/>
        </div>
    )
}