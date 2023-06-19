import {create} from 'zustand';

type State = {
    visibility:boolean
    changeVisibility: (value:boolean) => void
}

export const useRegisterWindowState = create<State>(set => ({
    visibility:false,
    changeVisibility: (value:boolean) => set({visibility:value})
}))