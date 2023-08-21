import Header from "@/components/Pages/Home/Header";
import TweetsSection from "@/components/Pages/Home/TweetsSection";
import { authOptions } from "@/lib/auth";
import { UserSession } from "@/lib/types/user";
import { getServerSession } from "next-auth";

export default async function Home() {
    const session = await getServerSession(authOptions)
    return (
        <>
            <Header />
            <TweetsSection 
                authenticated={session?.user ? true : false}
                userData={session?.user ? session.user as unknown as UserSession : null}
            />
        </>
    )
}