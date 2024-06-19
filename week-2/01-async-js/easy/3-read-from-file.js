const fs = require("fs/promises")

async function readThisFile(filepath){
    try{
        const data = await fs.readFile(filepath);
        console.log(data.toString());
    }catch(err){
        console.log(err)
    }
}

readThisFile('C:/Users/root/github/100xdevs-assignments/week-2/01-async-js/easy/3-read-from-file.md')