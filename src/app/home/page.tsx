import Header from "@/components/Pages/Home/Header";
import TweetsSection from "@/components/Pages/Home/TweetsSection";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import { FullTweetData } from "@/lib/types/tweets";
import { FullUserDocument } from "@/lib/types/user";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

async function get_tweets(userId:string):Promise<null | FullTweetData[]> {
    try {
        const db = await connectToDatabase()
        
        const user = await db.collection<FullUserDocument>('users').findOne({ _id: new ObjectId(userId) });
        if(!user) throw new Error()

        const following = user.following;
        
        const tweets = await db.collection('tweets').aggregate([
            // query to match several conditions
          { $match: { $or: [
            // every tweet that has the userId field 
            // as the current user, and all the users he follows.
            { userId: { $in: [userId, ...following] } },
            // every retweet that the user has made
            { retweets: userId }
          ] } },
            //   sorting by creation to get a timeline correctly
          { $sort: { createdAt: -1 } }
        ]).toArray();

        return tweets as FullTweetData[];
    } catch(e) {
        console.log('error on fetching tweets',e)
        return null
    }
} 

export default async function Home() {
    const session = await getServerSession(authOptions)
    const tweets_data = await get_tweets(session?.user._id!)

    return (
        <>
            <Header />
            <TweetsSection tweets={tweets_data ? tweets_data : []}/>
        </>
    )
}