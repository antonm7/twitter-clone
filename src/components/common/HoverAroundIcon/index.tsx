import styles from './index.module.scss';

type Props = {
    children:React.ReactNode
    bg?:'default' | 'white'
    className?:string
    onClick?:() => void
}

export default function HoverAroundIcon({children,className,bg,onClick}:Props) {
    return <div 
        onClick={onClick}
        id={bg === 'default' ? styles.wrapper : bg === 'white' ? styles.white_wrapper : styles.wrapper}
     className={`flex items-center justify-center rounded-full ${className}`}>
        {children}
    </div>
}