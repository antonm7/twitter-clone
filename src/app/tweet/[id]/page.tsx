import { Actions } from "@/components/Pages/Tweet/Actions";
import { CreatedInformation, StatsInformation } from "@/components/Pages/Tweet/Information";
import { Reply } from "@/components/Pages/Tweet/Reply";
import { DefaultHeader } from "@/components/common/HeaderOnPage"
import Hr from "@/components/common/Hr";
import { ProfileImage } from "@/components/common/ProfileImageCircle";
import { connectToDatabase } from "@/lib/mongodb"
import { type FullTweetData } from "@/lib/types/tweets";
import { ObjectId } from "mongodb";

async function get_tweet_data(id:string):Promise<null | FullTweetData> {
    try {
        const db = await connectToDatabase();
        const tweet = await db.collection<FullTweetData>('tweets')
        .findOne({_id:new ObjectId(id)})
        return tweet
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
    const tweet_data = await get_tweet_data(params.id)
    
    if(!tweet_data) return (
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
                        username={tweet_data.user_username}
                        url={tweet_data.user_img}
                    />
                    <div className="pl-3">
                        <h2 className="block font-bold">{tweet_data.user_name}</h2>
                        <h3 className="text-sm sub_text">@{tweet_data.user_username}</h3>
                    </div>
                </div>
                <p className="pt-4">{tweet_data.text}</p>
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
                <Actions />
                <Hr style={{marginTop:'0.1rem'}}/>
            </div>
            <Reply tweetData={tweet_data}/>
        </>
    )
    
}