import React, { useState } from 'react'; // Make sure to import useState

// import uploadFile from "../../convex/functions/uploadFile";
// import { FunctionReference } from "convex/server";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
    
    const formData = new FormData();
    formData.append('file', selectedFile );
    
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

        {/* Display selected file name */}
        {selectedFile && (
          <p className="mt-4 text-customBeige">Selected file: {selectedFile.name}</p>
        )}
      </div>
    </form>
  );
}

export default FileUpload;

