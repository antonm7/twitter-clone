import NoProfileImage from "./NoProfileImage";

type Props = {
    onClick?:(e:any) => void
}

export function RegularProfileImageCircle({onClick}:Props) {
    return (
        <div className="relative w-10 h-10 rounded-full" onClick={onClick}>
            <NoProfileImage />
        </div>
    )
}
