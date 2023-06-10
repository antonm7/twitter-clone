'use client'

import { FaChartBar, FaRegComment, FaRegHeart, FaShare } from 'react-icons/fa/index'
import { FaRetweet } from 'react-icons/fa/index'
import { HiDotsHorizontal } from 'react-icons/hi/index'

type Props = {
    id:string
}

export function Chat({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <FaRegComment className='sub_text'/>
        </div>
    ) 
    
}

export function RetweetIcon({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <FaRetweet className='sub_text'/>
        </div>
    ) 
}

export function HeartIcon({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <FaRegHeart className='sub_text'/>
        </div>
    ) 
}

export function ChartIcon({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <FaChartBar className='sub_text'/>
        </div>
    )
}

export function ShareIcon({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <FaShare className='sub_text'/>
        </div>
    )
}

export function Settings() {
    return <HiDotsHorizontal className='text-base sub_text'/>
}



