type Props = {
    title:string
    height:string
}

export default function StyledButton ({
    title,
    height}:Props) {
    return (
        <button className="bg-twitter-blue rounded-3xl px-5 w-min text-sm font-bold" style={{height}}>{title}</button>
    )
}