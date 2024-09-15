<<<<<<< HEAD
import React, { useState } from 'react'; // Make sure to import useState

=======

import React, { useState } from 'react';
>>>>>>> 034058461ae69458c83cc4599c4d1364e9fbee4b
// import uploadFile from "../../convex/functions/uploadFile";
// import { FunctionReference } from "convex/server";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
import pdfToText from 'react-pdftotext';

const FileUpload: React.FC = () => {
<<<<<<< HEAD
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
=======
  var resumetext:string;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);;
>>>>>>> 034058461ae69458c83cc4599c4d1364e9fbee4b
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

<<<<<<< HEAD
  async function handleSubmit(e: React.FormEvent) {
=======
  var fileExt = selectedFile?.name.split('.').pop();
  console.log(fileExt);
  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!selectedFile) {
  //     alert("Please select a file first.");
  //     return;
  //   }
  async function handleSubmit (e: React.FormEvent) {
>>>>>>> 034058461ae69458c83cc4599c4d1364e9fbee4b
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
    
  
    const formData = new FormData();
    formData.append('file', selectedFile );

    if (fileExt === 'pdf'){
      await pdfToText(selectedFile)
      .then(text => {resumetext = text;});
    }

    
<<<<<<< HEAD
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileContent = fileReader.result as string;
      console.log(fileContent);
    }
    fileReader.readAsText(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-customOtherGreen h-[250px] justify-center">
      {/* Single wrapper for the form content */}
      <div className="bg-customLightGreen text-customDarkGreen rounded-2xl shadow-lg p-6 max-w-md w-full">
        <label htmlFor="file" className="mb-4 text-sm text-customBeige italic">Upload your resume (PDF, Word):</label>
        <input 
          type="file" 
          id="file"
          accept=".pdf,.doc,.docx,.txt"  // Accept only PDF, Word, and text files
          onChange={handleFileChange} 
          className="mb-4 w-full border border-customBeige rounded-lg p-2"
        />
        <button 
          type="submit" 
          className="bg-customBeige text-customDarkGreen py-2 px-4 rounded-xl font-bold w-full">
          Submit
        </button>
=======
    // try{
    //   const result = await fetch("http://localhost:5173", {
    //     method: 'POST',
    //     body: formData,
    //   })
    
    if(fileExt === "txt"){
      const fileReader = new FileReader();
    
      fileReader.onload = () => {
        var a = fileReader.result as string;
        //console.log(fileContent);
        resumetext = a;
        console.log(resumetext);
      }
      
      fileReader.readAsText(selectedFile);
      
    }
    
    console.log(resumetext);

      // const data = await result.text;
      // console.log(data);
    // }
    // catch (error){
    //   console.error(error);
    // }
    

    // Just log the file name for now as you're working on the front end
    // console.log("Selected file:", selectedFile.name);
    
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label htmlFor="file" className="mb-2">Upload your resume (PDF, Word, txt):</label>
      <input 
        type="file" 
        id="file"
        accept=".pdf,.doc,.docx,.txt"  // Accept only PDF, Word, and text files
        onChange={handleFileChange} 
        className="mb-4"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
>>>>>>> 034058461ae69458c83cc4599c4d1364e9fbee4b

        {/* Display selected file name */}
        {selectedFile && (
          <p className="mt-4 text-customBeige">Selected file: {selectedFile.name}</p>
        )}
      </div>
    </form>
  );
}

export default FileUpload;

