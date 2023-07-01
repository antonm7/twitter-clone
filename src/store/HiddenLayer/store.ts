import {create} from 'zustand';

type State = {
    visibility:boolean
    background:boolean
    changeVisibility: (value:boolean,bg?:boolean) => void
}

export const useHiddenLayerStore = create<State>(set => ({
    visibility:false,
    background:false,
    changeVisibility: (value:boolean,bg?:boolean) => set({
        visibility:value,
        background:bg || false
    })
}))