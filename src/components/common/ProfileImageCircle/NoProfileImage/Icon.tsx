import { FaUser } from "react-icons/fa"

type Props = {
    size?:'sm' | 'lg'
}

export default function Icon({size}:Props) {
    return <FaUser className={`${size === 'lg' ? 'text-8xl' : 'text-3xl'}`}/>
}