import styles from '../index.module.scss';
import { ChangeEvent } from "react";

type Props = {
    placeholder?:string
    status?:"error" | "normal" | "success" 
    msg?:string
    type?:string
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
}

export function StyledInput({placeholder,onChange,status,msg,type}:Props) {
    return (
        <>
            <input 
                className={`${status === 'error' ? styles.error : status === 'success' ? styles.success : ''} h-14 w-full bg-transparent outline-none rounded-md px-2 font-normal ${styles.styled_input}`}
                placeholder={placeholder}
                onChange={e => onChange(e)}
                type={type === 'password' ? 'password' : 'text'}
            />
            <span className='text-red-600 pt-2 text-sm font-medium'>{msg}</span>
        </>
    )
}