import { Search, ActiveSearch } from "../Icons/Search";
import Tab from "../Tab/Index";
import TwitterIcon from "../TwitterIcon";

export default function NotAuthenticated() {
    return (
        <div className="h-full w-full min-w-[650px] max-w-[650px] flex flex-col items-end">
        <div className="h-full flex flex-col justify-between ml-8 mr-2">
         <div className="pr-12">
             <TwitterIcon />
             <Tab 
                 title='Explore'
                 to={'/explore'}
                 Icon={<Search />}
                 ActiveIcon={<ActiveSearch />}
             /> 
         </div>
        </div> 
     </div>
    )
}