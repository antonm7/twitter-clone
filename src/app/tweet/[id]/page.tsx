import { Actions } from "@/components/Pages/Tweet/Actions";
import { CreatedInformation, StatsInformation } from "@/components/Pages/Tweet/Information";
import { Reply } from "@/components/Pages/Tweet/Reply";
import { CommentsList } from "@/components/Pages/Tweet/CommentsList";
import { DefaultHeader } from "@/components/common/HeaderOnPage"
import Hr from "@/components/common/Hr";
import { ProfileImage } from "@/components/common/ProfileImageCircle";
import clientPromise from "@/lib/mongodb"
import { type FullTweetData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { FullLikeData } from "@/lib/types/like";
import { ForceRefresh } from "@/components/common/ForceRefresh";

type ReturnBody = {
    tweet_data:FullTweetData
    user_liked:boolean
}

async function get_tweet_data(id:string,userId:string | null):Promise<ReturnBody | null> {
    try {
        const client = await clientPromise
        const db = client.db(process.env.DATABASE_NAME)

        const tweet = await db.collection<FullTweetData>('tweets')
        .findOne({_id:new ObjectId(id)})

        let user_liked:boolean = false

        if(userId) {
            const is_user_liked = await db.collection<FullLikeData>('likes').findOne({
                userId,
                parentTweet:id
            })
            if(is_user_liked) {
                user_liked = true
            }
        }
        
        return {tweet_data:tweet as unknown as FullTweetData ,user_liked}

    } catch(e) {
        return null
    }
}

type PageProps = {
    params: {
        id:string
    }
}

export default async function Page({params}:PageProps) {
    const session = await getServerSession(authOptions)
    const req = await get_tweet_data(params.id, session?.user._id ? session?.user._id.toString() : null)
    const data = JSON.parse(JSON.stringify(req))

    if(!data?.tweet_data) return (
        <>
            <DefaultHeader title="Tweet"/>
            <div className="p-4">
                Loading....;
            </div>
        </>
    ) 

    return (
        <>  
            <ForceRefresh />
            <DefaultHeader title="Tweet"/>
            <div className="px-4">
                <div className="flex items-center">
                    <ProfileImage 
                        active_user_window={true} 
                        size="sm"
                        username={data.tweet_data.user_username}
                        url={data.tweet_data.user_img}
                    />
                    <div className="pl-3">
                        <h2 className="block font-bold">{data.tweet_data.user_name}</h2>
                        <h3 className="text-sm sub_text">@{data.tweet_data.user_username}</h3>
                    </div>
                </div>
                <p className="pt-4">{data.tweet_data.text}</p>
                <CreatedInformation 
                    hour={"3:25 PM"} 
                    date={"Aug 16, 2023"} 
                    views={4223}                    
                />
                <Hr style={{marginTop:'1rem',marginBottom:'1rem'}}/>
                <StatsInformation 
                    retweets={3} 
                    likes={111} 
                    bookmarks={0} 
                />
                <Hr style={{marginTop:'1rem',marginBottom:'0.1rem'}}/>
                <Actions
                    isUserLiked={data.user_liked}
                    userSession={session} 
                    tweetData={data.tweet_data}
                    likes={data.tweet_data.likes}
                />
                <Hr style={{marginTop:'0.1rem'}}/>
            </div>
            <Reply tweetData={data.tweet_data}/>
            <CommentsList parentTweet={data.tweet_data._id.toString()} userSession={session}/>
        </>
    )
    
}