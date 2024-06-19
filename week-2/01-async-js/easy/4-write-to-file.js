const fs = require('fs/promises')

const writeToThisFile = async (filePath,data) =>{
    try{
        await fs.writeFile(filePath,data);
        console.log(`Wrote data to ${filePath}`)

    }catch(err){
        console.log(err)
    }
};

writeToThisFile('C:/Users/root/github/100xdevs-assignments/week-2/01-async-js/easy/written-file.txt',"second line")