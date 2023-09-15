'use client';

import { useHiddenLayerStore } from "@/store/HiddenLayer";
import { useEffect } from "react";

type Props = {
    children:React.ReactNode
    onActive:(active:boolean) => void
    className?:string
    bg?:boolean
    closeable?:boolean
}

export function TurnOnHiddenLayerWrapper({children,
    onActive,
    className,
    bg,
    closeable}:Props) {
    const hiddenLayerStore = useHiddenLayerStore(state => state)

    const turnOnActive = (e:React.MouseEvent) => {
        e.preventDefault()
        if(hiddenLayerStore.visibility) return
        onActive(true)
        hiddenLayerStore.changeVisibility(true, bg ? true : false)
    }

    useEffect(() => {
        if(!hiddenLayerStore.visibility) {
            onActive(false)
        }
    },[hiddenLayerStore.visibility])

    return (
        <div className={className} 
            onClick={(e) => turnOnActive(e)}>
            {children}
        </div>
    )
}