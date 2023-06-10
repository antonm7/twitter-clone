import styles from './index.module.scss';
import { AtSign } from './Icons/AtSign';
import { Paint } from './Icons/Paint';

type Props = {
    active:boolean
}

export default function SettingsWindow({active}:Props) {
    if(!active) return null
    return (
        <div className="absolute bg-red-200 z-50 h-64 w-96 left-0 rounded-xl border-2 border-white" id={styles.wrapper}>
            <div className={`p-4 flex items-center ${styles.hover_effect}`} id={styles.top_hover_effect}>
                <AtSign />
                <h2 className='pl-8 text-xl font-medium'>Connect</h2>
            </div>
            <div className={`p-4 flex items-center  ${styles.hover_effect}`}>
                <Paint />
                <h2 className='pl-8 text-xl font-medium'>Drafts</h2>
            </div>
            <div className='mx-4' id={styles.hr}/>
        </div>
    )
}