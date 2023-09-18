import {create} from 'zustand';

type State = {
    visibility:boolean
    background:boolean
    close:() => void
    changeVisibility: (value:boolean,bg?:boolean) => void
}

export const useHiddenLayerStore = create<State>(set => ({
    visibility:false,
    background:false,
    changeVisibility: (value:boolean,bg?:boolean,closeable_value?:boolean) => set({
        visibility:value,
        background:bg || false
    }),
    close:() => set({
            visibility:false,
            background:false
        }) 
}))

export const useHiddenLayerVisibility = () => useHiddenLayerStore(state => state.visibility);
export const useHiddenLayerChangeVisibility = () => useHiddenLayerStore(state => state.changeVisibility);
export const useHiddenLayerBackground = () => useHiddenLayerStore(state => state.background)