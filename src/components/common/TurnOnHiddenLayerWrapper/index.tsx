'use client';

import { useHiddenLayerStore } from "@/store/HiddenLayer";
import { useEffect } from "react";

type Props = {
    children:React.ReactNode
    onActive:(active:boolean) => void
    className?:string
}

export function TurnOnHiddenLayerWrapper({children,onActive,className}:Props) {
    const hiddenLayerStore = useHiddenLayerStore(state => state)

    const turnOnActive = () => {
        onActive(true)
        hiddenLayerStore.changeVisibility(true)
    }

    useEffect(() => {
        if(!hiddenLayerStore.visibility) onActive(false)
    },[hiddenLayerStore.visibility])

    return (
        <div className={className} 
            onClick={() => turnOnActive()}>
            {children}
        </div>
    )
}