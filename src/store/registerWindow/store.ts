import {create} from 'zustand';

type State = {
    loginVisibility:boolean
    signupVisibility:boolean
    changeLoginVisibility: (value:boolean) => void
    changeSignupVisibility: (value:boolean) => void
}

export const useRegisterWindowState = create<State>(set => ({
    loginVisibility:false,
    signupVisibility:false,
    changeLoginVisibility: (value:boolean) => set({loginVisibility:value}),
    changeSignupVisibility: (value:boolean) => set({signupVisibility:value})
}))