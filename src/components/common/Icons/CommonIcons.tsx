'use client'

import { IoIosClose } from 'react-icons/io/index'
import { FaRetweet } from 'react-icons/fa/index'

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
