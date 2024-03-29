'use client'

import { Sizes } from '@/lib/types/common'
import { BsBookmark } from 'react-icons/bs'
import { FaChartBar, FaHeart, FaRegComment, FaRegHeart, FaShare } from 'react-icons/fa/index'
import { FaRetweet } from 'react-icons/fa/index'

type Props = {
    id:string
    size:Sizes
    full?:boolean
}

export function Chat({id,size}:Props) {
    return (
        <div id={id} className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            <FaRegComment className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/>
        </div>
    ) 
}

export function RetweetIcon({id,size,full}:Props) {
    // TODO:ACTIVE FULL FUNCTIONALITY
    return (
        <div id={id} className={`${size === 'sm' ? 'h-9 w-9' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            <FaRetweet className={`${size === 'sm' ? 'text-lg' : 'text-2xl'} sub_text`}/>
        </div>
    ) 
}

export function HeartIcon({id,size,full}:Props) {
    return (
        <div id={id} className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            {full ? <FaHeart className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/> :
            <FaRegHeart className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/> }
        </div>
    ) 
}

export function ChartIcon({id,size}:Props) {
    return (
        <div id={id} className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            <FaChartBar className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/>
        </div>
    )
}

export function ShareIcon({id,size}:Props) {
    return (
        <div id={id} className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            <FaShare className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/>
        </div>
    )
}

export function BookmarkIcon({id,size}:Props) {
    return (
        <div id={id} className={`${size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'} flex items-center justify-center rounded-full`}>
            <BsBookmark className={`${size === 'sm' ? 'text-base' : 'text-xl'} sub_text`}/>
        </div>
    )
}




