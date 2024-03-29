// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useDropzone } from "react-dropzone";
import type { FileWithPath } from "react-dropzone";
 
import { useUploadThing } from "@/utils/uploadthing";
import { useState, useCallback } from "react";
 
export default function ImageUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);
 
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: undefined,
  });
 
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
  });
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {files.length > 0 && (
          <button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}