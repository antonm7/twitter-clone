import styles from './index.module.scss';

type Props = {
    style?:React.CSSProperties
}

export default function Hr({style}:Props) {
    return (
        <div style={style} id={styles.hr}>

        </div>
    )
}