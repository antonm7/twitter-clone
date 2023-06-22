import { LoginButton, SignupButton } from "./Buttons";

export default function RegisterBar() {
    return (
        <div className="fixed flex items-center w-full bg-twitter-blue h-min bottom-0 py-3">
            <div className="h-full w-full max-w-[650px]" />
            <div className='max-w-[650px] min-w-[650px] w-full '>
                <h1 className="font-bold text-2xl">Don't Miss Whats Happening</h1>
                <h3>People in twitter are first to know</h3>
            </div>
            <div className='max-w-sm w-full ml-8 pr-16 flex items-end justify-end'>
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    )
}