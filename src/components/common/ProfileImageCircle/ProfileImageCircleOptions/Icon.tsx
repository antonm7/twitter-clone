import { FaUser } from "react-icons/fa"

type Props = {
    size?:'sm' | 'lg' | 'xl'
}

export default function Icon({size}:Props) {
    return <FaUser className={`${size === 'lg' ? 'text-6xl' : size === 'xl' ? 'text-8xl' : 'text-3xl'}`}/>
}