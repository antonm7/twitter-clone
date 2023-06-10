import Tab from './Tab'
import styles from './index.module.scss'

export default function ForYou() {
    return (
        <div className="max-w-sm w-full ml-10 m-4 rounded-xl" id={styles.wrapper}>
            <h2 className='text-xl font-bold p-4'>Trends for you</h2>
            <Tab />
        </div>
    )
}