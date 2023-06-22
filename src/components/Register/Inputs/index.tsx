import styles from '../index.module.scss';
import { ChangeEvent } from "react";

type Props = {
    placeholder?:string
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
}

export function StyledInput({placeholder,onChange}:Props) {
    return (
        <input 
            className={`h-14 w-full bg-transparent outline-none rounded-md px-2 font-normal ${styles.styled_input}`}
            placeholder={placeholder}
            onChange={e => onChange(e)}
        />
    )
}