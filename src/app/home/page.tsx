import CreateTweet from "@/components/Pages/Home/CreateTweet";
import Header from "@/components/Pages/Home/Header";
import Tweet from "@/components/Pages/Home/Tweet";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions)
    console.log(session?.user)
    return (
        <>
            <Header />
            <CreateTweet />
            <Tweet />
        </>
    )
}