const fs = require('fs/promises')

const spacesRegex = /\ {2,}/g;

const fileCleaner = async (fileWithSpaces,cleanedFile)=>{
   try{ const data = await fs.readFile(fileWithSpaces, 'utf-8');
    const cleanedData = data.replace(spacesRegex," ")
    await fs.writeFile(cleanedFile,cleanedData)
    console.log(cleanedData)

   }catch(err){
    console.log(err)
   }
}

fileCleaner("./file-with-spaces.txt","./file-with-no-spaces.txt")