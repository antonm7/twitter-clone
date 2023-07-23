'use client';

import TwitterIcon from "@/components/Menu/TwitterIcon";
import styles from '../../index.module.scss';
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { UploadProfileImage } from "@/components/common/ProfileImageCircle";
import { useUploadThing } from "@/utils/uploadthing";


type Props = {
    email:string
    name:string
    username:string    
    active:boolean
    password:string
}

async function signup_action({email, password,name, username,profile_image}:
    {email:string,password:string,name:string,username:string,profile_image:string}) {
    try {
        const request = await fetch(`/api/register/signup_action`,{
            method:'POST',
            body:JSON.stringify({
                email,
                password,
                name,
                profile_image,
                username
            })
        })
        const response = await request.json()
        return response
    } catch(e) {
        throw new Error('Unexpected Error')
    }
}

interface ExtendedFiles extends File {
    path:string
}

export default function ImageSection({email, name,active,username,password}:Props) {
    const [files, setFile] = useState<ExtendedFiles[]>()

    const { startUpload } = useUploadThing("imageUploader");

    const action = async () => {
        try {
            const fileUrl = await startUpload(files as File[])
            const data = await signup_action({
                email,
                name,
                username,
                password,
                profile_image:fileUrl ? fileUrl[0].fileUrl : ''
            })
            if(data.error) {
                alert(data.error)
            } else {
                const singIn_data = await signIn('credentials',{
                    redirect:true,
                    email,
                    password
                })
                if(singIn_data?.ok) {
                    console.log('signed user', singIn_data)
                } else {
                    console.log(singIn_data)
                }
            }
        } catch(e) {
            console.log(e)
            alert('Unexpected Error')
        }
    }

    if(!active) return null
   return (
        <div className={`absolute z-20 w-full h-full bg-red-200 top-0 left-0 ${styles.container}`}>
            <div className='w-full flex justify-center'>
                <TwitterIcon />
            </div>
            <div className='w-[65%] m-auto font-bold pt-8'>
            <h1 className='text-2xl pb-4 text-center'>Upload Your Profile Image</h1>
            <div className="flex justify-center">
                <UploadProfileImage method={(files) => setFile(files as ExtendedFiles[])}/>
            </div>
             <button 
                onClick={() => action()}
                className="w-full h-10 bg-transparent bg-white text-black font-bold rounded-3xl text-sm mt-4"
                id={styles.login}>
                    Create Your Profile
            </button>
        </div>
    </div>
   ) 
}