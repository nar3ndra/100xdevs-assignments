
function createPromise(){
return new Promise((resolve,reject) =>{
    const clock = new Date()
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();
    setTimeout(()=>{
        console.log(`${hours}:${minutes}:${seconds}`)
        resolve();
    },1000);
}
)
}


async function timer(){
    while(1){
        await createPromise();
    }
        
}


timer()
//you can also use while loop with true, so that it prints the time until you stop the program;