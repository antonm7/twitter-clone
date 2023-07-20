import Icon from "./Icon";

type Props = {
    size?:'sm' | 'lg' | 'xl'
}

export function NoProfileImage({size}:Props) {
    return (
        <div className="bg-[#CCD6DD] w-full h-full rounded-full flex items-end justify-center overflow-hidden">
            <Icon size={size}/>
        </div>
    )
}

type ProfileImageProps = {
    img:string
}

export function YesProfileImage({img}:ProfileImageProps) {
    return (
        <div 
        style={{backgroundImage:`url(${img})`}}
        className=" bg-cover bg-center w-full h-full rounded-full flex items-end justify-center overflow-hidden">
        </div>
    )
}