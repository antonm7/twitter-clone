import styles from './index.module.scss';

type Props = {
    title:string
    active:boolean
    navigate:() => void
    width?:string
    height?:string
}

export default function RoutingTabs(props:Props) {
    const {
        title, active, navigate, width, height
    } = props

    return (
        <div 
            id={styles.tab_wrapper} 
            style={{
                width: width ? width : '100%',
                height:height ? height: '3.2rem'
            }}
            className='relative cursor-pointer flex items-center justify-center'
        >
            <h3 className={`${!active ? styles.active : '' } font-bold text-sm`}>{title}</h3>
            {active ? 
                <div className='absolute bg-twitter-blue w-12 h-1 rounded-lg bottom-1' />
            : null}
            
        </div>
    )
}