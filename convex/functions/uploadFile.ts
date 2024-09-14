import { mutation } from '../_generated/server';
import { v4 as uuidv4 } from 'uuid';


export const uploadFile = mutation(async (ctx:{db:any}, {fileData,fileName}) => {
  const fileId = uuidv4(); // Generate a unique identifier for the file
  await ctx.db.insert('files', {
    id: fileId,
    name: fileName,  
    data: fileData,  
    uploadedAt: new Date().toISOString(),  
  });
  return { fileId };
});