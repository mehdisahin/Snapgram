import test from "node:test";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
      {...getRootProps()}
    >
      <input className="cursor-pointer" {...getInputProps()} />
      {
      fileUrl ? (
        <div>test1</div>
      ): (
      <div>test2</div>
      )
       
        <p>Drop the files here ...</p>
        :
        <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
   );
  
};

export default FileUploader;
