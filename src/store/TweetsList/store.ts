import type { FullTweetData } from '@/lib/types/tweets';
import {create} from 'zustand';

type State = {
    list:FullTweetData[]
    clearList:() => void
    setList:(list:FullTweetData[]) => void
    insertTweet:(comment:FullTweetData) => void
    removeTweet:(id:string) => void
}

export const useTweetsListState = create<State>(set => ({
    list:[],
    clearList: () => set({list:[]}),
    setList:(list:FullTweetData[]) => set({list}),
    insertTweet:(comment:FullTweetData) => set(state => ({list:[comment,...state.list]})),
    removeTweet:(id:string) => set(state => ({list:state.list.filter(c => c._id.toString() !== id)}))
}))