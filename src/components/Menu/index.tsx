import Tab from "./Tab/Index";
import { ActiveHome, Home } from './Icons/Home';
import { ActiveSearch, Search } from "./Icons/Search";
import { ActiveNotifications,Notifications } from "./Icons/Notifications";
import { ActiveMessages, Messages } from "./Icons/Messages";
import { ActiveBookmark, Bookmark } from "./Icons/Bookmark";
import { ActiveProfile, Profile } from "./Icons/Profile";
import { More } from "./Icons/More";
import { Twitter } from "./Icons/Twitter";
import MoreSettings from "./MoreSettings";

export default function Menu() {
    return (
        <div className="h-full w-full max-w-[650px] flex flex-col items-end">
           <div className="mr-16">
                <Tab 
                    title=''
                    to={'/home'}
                    Icon={<Twitter />}
                    ActiveIcon={<Twitter />}
                /> 
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
                    to={'/profile'}
                    Icon={<Profile />}
                    ActiveIcon={<ActiveProfile />}
                /> 
                <MoreSettings  />
           </div> 
        </div>
    )
}