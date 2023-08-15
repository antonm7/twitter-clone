'use client'

import { IoIosClose } from 'react-icons/io/index'
import { BsArrowLeft } from 'react-icons/bs/index'

type Props = {
    id:string
    method?:() => void
}

export function Xmark({id,method}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <IoIosClose onClick={method} className='sub_text'/>
        </div>
    ) 
}

export function BackIcon({id,method}:Props) {
    return (
        <div id={id} className='h-8 w-8 flex items-center justify-center rounded-full'>
            <BsArrowLeft className='sub_text'/>
        </div>
    )
}
