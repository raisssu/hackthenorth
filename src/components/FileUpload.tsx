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
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-customDarkGreen">
      <label htmlFor="file" className="mb-4 text-xs text-customBeige italic">Upload your resume (PDF, Word):</label>
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

      {/* Display selected file name */}
      {selectedFile && (
        <p className="mt-4 text-gray-700">Selected file: {selectedFile.name}</p>
      )}
    </form>
  );
}

export default FileUpload;
