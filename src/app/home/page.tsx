import CreateTweet from "@/components/Pages/Home/CreateTweet";
import Header from "@/components/Pages/Home/Header";
import Tweet from "@/components/Pages/Home/Tweet";

export default function Home() {
    return (
        <>
            <Header />
            <CreateTweet />
            <Tweet />
        </>
    )
}