'use client'
import { useRef } from "react";
import styles from './index.module.scss';

type Props = {
    onChange:(text:string) => void
}


export default function TextArea({onChange}:Props) {
    const textareaRef = useRef<any>(null)

    textareaRef?.current?.addEventListener('input', () => {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      });

      return (
            <textarea 
                className='w-full pt-4 text-xl'
                id={styles.textarea}
                ref={textareaRef}
                placeholder="What is happening?!"
                onChange={e => onChange(e.target.value)}
            />
      )

}