import styles from './index.module.scss';

type Props = {
    active:boolean
}

type DropDownLineProps = {
    title:string
}

const DropDownLine = ({title}:DropDownLineProps):JSX.Element => {
    return (
        <div className={`cursor-pointer p-4 flex items-center justify-between hover_effect hover_effect_transition`}>
            <span className='text-sm font-medium'>{title}</span>
        </div>
    )
}

export default function TabSettings({active}:Props) {
    if(!active) return null
    return (
        <div className="py-4 rounded-xl absolute w-64 h-min tab_border z-50" id={styles.wrapper}>
            <DropDownLine title={"Add an existing account"}/>
            <DropDownLine title={"Log out"}/>
        </div>
    )
}