'use client';

import { useCallback, useEffect, useState } from "react";
import {NoProfileImage, YesProfileImage} from "./ProfileImageCircleOptions";
import UserWindow from "./UserWindow";
import type { FileWithPath } from "react-dropzone";
import { useDropzone } from "react-dropzone";

type Props = {
    onClick?:(e:any) => void
    url?:string
    username?:string
    active_user_window:boolean
    size?:'sm' | 'lg'
}

export function RegularProfileImageCircle({onClick}:Props) {
    return (
        <div className="relative min-w-[2.5rem] w-10 h-10 rounded-full" onClick={onClick}>
            <NoProfileImage />
        </div>
    )
}

export function ProfileImage({onClick,url,size,username,active_user_window}:Props) {
    const [visible, setVisible] = useState<boolean>(false)
    
    const handle_click = (e:React.MouseEvent) => {
        e.preventDefault()
        onClick ? onClick(e) : null
    }

    if(!url) {
        return (
                <div onMouseEnter={() => setVisible(true)} 
                    onMouseLeave={() => setVisible(false)} 
                    className={`${size === 'lg' ? 'min-w-[5rem] w-20 h-20' : 'min-w-[2.5rem] w-10 h-10'} relative rounded-full`} onClick={handle_click}>
                    <NoProfileImage size={size}/>
                    {active_user_window && visible ? <UserWindow username={username ? username : ''}/> : null}
                </div>
        )
    } else {
        return (
                <div 
                    onMouseEnter={() => setVisible(true)} 
                    onMouseLeave={() => setVisible(false)} className={`${size === 'lg' ?
                     'min-w-[5rem] w-20 h-20' : 'min-w-[2.5rem] w-10 h-10'} relative rounded-full`} 
                    onClick={handle_click}
                >
                    <YesProfileImage img={url}/>
                    {active_user_window && visible ? <UserWindow username={username ? username : ''}/> : null}
                </div>
        )
    }
}

type UploadProfileImageProps = {
    method:(files:File[]) => void
}

export function UploadProfileImage({method}:UploadProfileImageProps) {
    const [files, setFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFiles(acceptedFiles);
      }, []);

      const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: undefined,
      });

    useEffect(() => {
        if(files.length) {
            method(files)
        }
    },[files])

    return (
        <div className="relative" {...getRootProps()}>
            <input {...getInputProps()} />
            <div 
                className={`w-36 h-36 relative rounded-full`} >
                {files.length ? <YesProfileImage img={URL.createObjectURL(files[0])}/> : <NoProfileImage size="xl"/>}
            </div>
        </div>
    )
}

