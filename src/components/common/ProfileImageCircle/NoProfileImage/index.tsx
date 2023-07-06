import Icon from "./Icon";

type Props = {
    size?:'sm' | 'lg'
}

export default function NoProfileImage({size}:Props) {
    return (
        <div className="bg-[#CCD6DD] w-full h-full rounded-full flex items-end justify-center overflow-hidden">
            <Icon size={size}/>
        </div>
    )
}