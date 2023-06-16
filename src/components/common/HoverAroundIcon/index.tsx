import styles from './index.module.scss';

type Props = {
    children:React.ReactNode
    className?:string
}

export default function HoverAroundIcon({children,className}:Props) {
    return <div 
     className={`flex items-center justify-center rounded-full ${className}`} id={styles.wrapper}>
        {children}
    </div>
}