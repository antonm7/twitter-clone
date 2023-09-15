import { Actions } from "@/components/Pages/Tweet/Actions";
import { CreatedInformation, StatsInformation } from "@/components/Pages/Tweet/Information";
import { Reply } from "@/components/Pages/Tweet/Reply";
import { CommentsList } from "@/components/Pages/Tweet/CommentsList";
import { DefaultHeader } from "@/components/common/HeaderOnPage"
import Hr from "@/components/common/Hr";
import { ProfileImage } from "@/components/common/ProfileImageCircle";
import { connectToDatabase } from "@/lib/mongodb"
import { type FullTweetData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { FullLikeData } from "@/lib/types/like";

type ReturnBody = {
    tweet_data:FullTweetData
    user_liked:boolean
}

async function get_tweet_data(id:string,userId:string | null):Promise<ReturnBody | null> {
    try {
        const db = await connectToDatabase();
        
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

export default async function TweetPage({params}:PageProps) {
    const session = await getServerSession(authOptions)
    const data = await get_tweet_data(params.id,session?.user ? session?.user._id.toString() : null)

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
                    <Actions isUserLiked={data.user_liked} userSession={session} tweetData={data.tweet_data}/>
                    <Hr style={{marginTop:'0.1rem'}}/>
                </div>
                <Reply tweetData={data.tweet_data}/>
                <CommentsList parentTweet={data.tweet_data._id.toString()} userSession={session}/>
        </>
    )
    
}