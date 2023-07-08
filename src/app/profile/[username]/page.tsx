import HeaderOnPage from "@/components/common/HeaderOnPage";
import { ProfileImage } from "@/components/common/ProfileImageCircle";
import { connectToDatabase } from "@/lib/mongodb";
import { FullUserDocument } from "@/lib/types/user";
import styles from './index.module.scss';
import OptionsCircle from "@/components/Pages/Profile/OptionsCircle";
import {StyledButtonWhite} from "@/components/common/StyledButton";

async function get_user_data(username:string) {
    try {
        const db = await connectToDatabase();
        const user = await db.collection<FullUserDocument>('users').findOne({username})

        return user
    } catch(e) {
        return null
    }
}

export default async function Profile({params}:{params:{username:string}}) {
    const user_data = await get_user_data(params.username)

    return (
        <>
            <HeaderOnPage title={params.username} subTitle={'6 Tweets'} />
            <div className="w-full h-52 bg-gray-500" />
            <div className="px-6 relative">
                <div className="absolute" id={styles.profile_image_wrapper}>
                    <ProfileImage size="lg"/>
                </div>
                <div className="flex items-center justify-end pt-4">
                    <div className="pr-4">
                        <OptionsCircle />
                    </div>
                   <StyledButtonWhite title="Follow"/>
                </div>
            </div>
        </>
    )
}