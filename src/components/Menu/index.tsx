import Tab from "./Tab/Index";
import { ActiveHome, Home } from './Icons/Home';
import { ActiveSearch, Search } from "./Icons/Search";
import { ActiveNotifications,Notifications } from "./Icons/Notifications";
import { ActiveMessages, Messages } from "./Icons/Messages";
import { ActiveBookmark, Bookmark } from "./Icons/Bookmark";
import { ActiveProfile, Profile } from "./Icons/Profile";
import MoreSettings from "./MoreSettings";
import TwitterIcon from "./TwitterIcon";
import User from "./User";
import {StyledButtonBlue} from "../common/StyledButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Menu() {
    const session = await getServerSession(authOptions)

    return (
        <div className="h-full w-full max-w-[650px] flex flex-col items-end">
           <div className="h-full flex flex-col justify-between ml-8 mr-2">
            <div className="pr-12">
                <TwitterIcon />
                <Tab 
                    title='Home'
                    to={'/home'}
                    Icon={<Home />}
                    ActiveIcon={<ActiveHome />}
                /> 
                <Tab 
                    title='Explore'
                    to={'/explore'}
                    Icon={<Search />}
                    ActiveIcon={<ActiveSearch />}
                /> 
                <Tab 
                    title='Notifications'
                    to={'/notifications'}
                    Icon={<Notifications />}
                    ActiveIcon={<ActiveNotifications />}
                /> 
                <Tab 
                    title='Messages'
                    to={'/messages'}
                    Icon={<Messages />}
                    ActiveIcon={<ActiveMessages />}
                /> 
                 <Tab 
                    title='Bookmarks'
                    to={'/bookmarks'}
                    Icon={<Bookmark />}
                    ActiveIcon={<ActiveBookmark />}
                /> 
                <Tab 
                    title='Profile'
                    to={`/profile/${session?.user.username}`}
                    Icon={<Profile />}
                    ActiveIcon={<ActiveProfile />}
                /> 
                <MoreSettings  />
                <StyledButtonBlue lgText={true} height={"3.3rem"} width="100%" title={"Tweet"}/>
            </div>
                <User 
                    name={session?.user.name as string}
                    username={session?.user.username as string}
                />
           </div> 
        </div>
    )
}