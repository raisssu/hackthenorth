import { mutation } from '../_generated/server';
import { v4 as uuidv4 } from 'uuid';


interface UploadFileParams {
    fileData: string;
    fileName: string;
  }
  
//   export const uploadFile = mutation(async (ctx: any, {fileData, fileName}) => {
//     try {
//       const fileId = uuidv4(); // Generate a unique identifier for the file
//       await ctx.db.insert('files', {
//         id: fileId,
//         name: fileName,  
//         data: fileData,  
//         uploadedAt: new Date().toISOString(),  
//       });
//       return { fileId };
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       throw new Error('Failed to upload file');
//     }
//   });