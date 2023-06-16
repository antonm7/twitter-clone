import Tab from './Tab'
import styles from './index.module.scss'

export default function ForYou() {
    return (
        <div className="w-full rounded-xl" id={styles.wrapper}>
            <h2 className='text-xl font-bold p-4'>Trends for you</h2>
            <Tab bottom/>
        </div>
    )
}