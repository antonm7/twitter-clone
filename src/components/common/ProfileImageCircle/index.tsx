import NoProfileImage from "./NoProfileImage";

type Props = {
    onClick?:(e:any) => void
    url?:string
    size?:'sm' | 'lg'
}

export function RegularProfileImageCircle({onClick}:Props) {
    return (
        <div className="relative w-10 h-10 rounded-full" onClick={onClick}>
            <NoProfileImage />
        </div>
    )
}

export function ProfileImage({onClick,url,size}:Props) {
    if(!url) {
        return (
            <div className={`${size === 'lg' ? 'w-32 h-32' : 'w-10 h-10'} relative rounded-full`} onClick={onClick}>
                <NoProfileImage size={size}/>
            </div>
        )
    } else {
        return (
            <div className={`${size === 'lg' ? 'w-32 h-32' : 'w-10 h-10'} relative rounded-full`} onClick={onClick}>
                <NoProfileImage size={size}/>
            </div>
        )
    }
}
