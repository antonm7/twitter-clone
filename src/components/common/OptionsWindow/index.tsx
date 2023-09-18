import { type IconType } from 'react-icons/lib';
import styles from './index.module.scss';
import React from 'react';
import { useHiddenLayerStore } from '@/store/HiddenLayer';

type Props = {
    active:boolean
    children:React.ReactNode
    translateY:string
    translateX?:string
    width?:string
}

export function OptionsWindow({active,children,translateY,translateX,width}:Props) {
    if(!active) return null

    return (
        <div 
            className='absolute z-50 cursor-pointer h-min left-0 rounded-xl tab_border hover:bg-red-200'
            id={styles.wrapper} 
            style={{
                width:width ? width : '24rem',
                transform:`translate(${translateX ? translateX : '0'}, ${translateY})`
            }}
        >   
            {children}
        </div>
    )
}

type LineProps = {
    title:string
    icon?:React.ReactNode
    onClick?:() => void
}

export function Line({title,icon,onClick}:LineProps){
    const changeVisibility =  useHiddenLayerStore(state => state.changeVisibility)
    const method = () => {
        changeVisibility(false)
        onClick ? onClick() : null
    }
    
    return (
        <div onClick={() => method()} className={`z-50 cursor-pointer p-4 flex items-center hover_effect hover_effect_transition`}>
            {icon ? icon : null}
            <span className={`text-sm font-semibold ${icon ? 'pl-4' : ''}`}>{title}</span>
        </div>
    )
}


