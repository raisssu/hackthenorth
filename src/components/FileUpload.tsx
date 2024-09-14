import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    // Just log the file name for now as you're working on the front end
    console.log("Selected file:", selectedFile.name);
  };

  return (
    <div className="flex flex-col items-center bg-customLightGreen h-[250px] justify-center">
      {/* Bubble effect for form */}
      <form onSubmit={handleSubmit} className="bg-customMediumLightGreen text-customDarkGreen rounded-2xl shadow-lg p-6 max-w-md w-full">
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
      </form>
    </div>
  );
}

export default FileUpload;

