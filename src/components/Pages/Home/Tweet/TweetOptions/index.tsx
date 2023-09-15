import { Line, OptionsWindow } from "@/components/common/OptionsWindow";

export function TweetOptions({active}:{active:boolean}) {
    return (
        <OptionsWindow width="17rem" translateY="-20%" translateX="130%" active={active}>
            <Line title={"Not interested in this post"}/>
            <Line title={"Report post"}/>
            <Line title={"Unfollow User"}/>
        </OptionsWindow>
    )
}