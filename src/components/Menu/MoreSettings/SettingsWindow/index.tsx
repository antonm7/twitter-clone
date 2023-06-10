import styles from './index.module.scss';
import { AtSign } from './Icons/AtSign';
import { Paint } from './Icons/Paint';
import { Arrow } from './Icons/Arrow';

type Props = {
    active:boolean
}

type DropDownLineProps = {
    title:string
    bottom?:boolean
}

const DropDownLine = ({title,bottom}:DropDownLineProps):JSX.Element => {
    return (
        <div id={bottom ? styles.bottom_hover_effect : ''} className={`p-4 flex items-center justify-between ${styles.hover_effect}`}>
            <span className='text-sm font-medium'>{title}</span>
            <Arrow />
        </div>
    )
}

export default function SettingsWindow({active}:Props) {
    if(!active) return null
    return (
        <div className="cursor-pointer absolute bg-red-200 z-50 h-min w-96 left-0 rounded-xl border-2 border-white" id={styles.wrapper}>
            <div className={`p-4 flex items-center ${styles.hover_effect}`} id={styles.top_hover_effect}>
                <AtSign />
                <h2 className='pl-8 text-xl font-medium'>Connect</h2>
            </div>
            <div className={`p-4 flex items-center  ${styles.hover_effect}`}>
                <Paint />
                <h2 className='pl-8 text-xl font-medium'>Drafts</h2>
            </div>
            <div className='mx-4' id={styles.hr}/>
            <DropDownLine title={'Creator Studio'}/>
            <DropDownLine title={'Creator Studio'}/>
            <DropDownLine bottom title={'Creator Studio'}/>
        </div>
    )
}