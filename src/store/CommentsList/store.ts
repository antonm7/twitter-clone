import type { FullCommentData } from '@/lib/types/tweets';
import {create} from 'zustand';

type State = {
    list:FullCommentData[]
    clearList:() => void
    setList:(list:FullCommentData[]) => void
    insertComment:(comment:FullCommentData) => void
    removeComment:(id:string) => void
}

export const useCommentsListStore = create<State>(set => ({
    list:[],
    clearList: () => set({list:[]}),
    setList:(list:FullCommentData[]) => set({list}),
    insertComment:(comment:FullCommentData) => set(state => ({list:[comment,...state.list]})),
    removeComment:(id:string) => set(state => ({list:state.list.filter(c => c._id.toString() !== id)}))
}))