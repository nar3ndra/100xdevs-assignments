
const clock = () =>{
return new Promise((res,rej)=>{
    let tool = new Date();
    let hours = tool.getHours();
    let minutes = tool.getMinutes();
    let seconds = tool.getSeconds();
    
    const printer = ()=>{
    console.log(`${hours}:${minutes}:${seconds}`)
    if((hours>11 && minutes>59) || (hours>12)){
        console.log(`${hours-12}:${minutes}:${seconds} PM`)
    }else{
    console.log(console.log(`${hours}:${minutes}:${seconds} AM`))
    }
    res();
    }

    setTimeout(printer,1000);

})
}

const timer = async () =>{

    //call this repetedly with while loop
    await clock()

}

timer();