'use client'

import { IoIosClose } from 'react-icons/io/index'
import { BsArrowLeft } from 'react-icons/bs/index'

type Props = {
    id:string
}

export function Xmark({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <IoIosClose className='sub_text'/>
        </div>
    ) 
}

export function BackIcon({id}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <BsArrowLeft className='sub_text'/>
        </div>
    )
}
