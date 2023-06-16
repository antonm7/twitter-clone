type Props = {
    title:string
    height:string
    width?:string,
    lgText?:boolean
}

export default function StyledButton ({
    title,
    width,
    lgText,
    height}:Props) {
    return (
        <button className={`bg-twitter-blue rounded-3xl px-5 w-min ${lgText ? 'text-lg' : 'text-sm'} text-sm font-bold`} style={{height,width}}>{title}</button>
    )
}