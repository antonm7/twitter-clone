type Props = {
    title:string
    height?:string
    width?:string,
    lgText?:boolean
    onClick:() => void
}

export function StyledButtonBlue ({
    title,
    width,
    lgText,
    height,
    onClick}:Props) {
        let height_from_props = height || '2.4rem'
    return (
        <button 
            onClick={onClick}
            className={`bg-twitter-blue rounded-3xl px-5 w-min ${lgText ? 'text-lg' : 'text-sm'} text-sm font-bold`} 
            style={{height:height_from_props,width}}>
                {title}
        </button>
    )
}

export function StyledButtonWhite ({
    title,
    width,
    lgText,
    height,
    onClick}:Props) {
        let height_from_props = height || '2.4rem'
    return (
        <button 
            onClick={onClick}
            className={`bg-white rounded-3xl px-5 w-min ${lgText ? 'text-lg' : 'text-sm'} text-sm font-bold text-black`} 
            style={{height:height_from_props,width}}>
                {title}
        </button>
    )
}
