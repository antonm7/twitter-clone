type CreatedInformationProps = {
    hour:string
    date:string
    views:number
}

export function CreatedInformation({hour, date, views}
    :CreatedInformationProps) {
    return (
        <div className="flex items-center text-sm pt-4">
            <span className="sub_text pr-3">
                {hour}
            </span>
            <span className="sub_text pr-3">
                {date}
            </span>
            <p className="text-white font-bold">
                {views} 
                <span className="sub_text font-normal"> Views</span> 
            </p>
        </div>
    )
}

type StatsInformationProps = {
    retweets:number
    likes:number
    bookmarks:number
}

export function StatsInformation({
    retweets,
    likes,
    bookmarks
}:StatsInformationProps) {
    return (
        <div className="flex items-center text-sm">
            <p className="text-white font-bold pr-3">
                {retweets} 
                <span className="sub_text font-normal"> Retweets</span> 
            </p>
            <p className="text-white font-bold pr-3">
                {likes} 
                <span className="sub_text font-normal"> Likes</span> 
            </p>
            <p className="text-white font-bold pr-3">
                {bookmarks} 
                <span className="sub_text font-normal"> Bookmarks</span> 
            </p>
        </div>  
    )
}