//## Create a counter in JavaScript

/*We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

const time = ()=>{
    const clock = new Date()
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`)
}
setInterval(time,1000)

