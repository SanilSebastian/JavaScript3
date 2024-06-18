// setTimeout()=function in JavaScript that allows you to schedule
//              the execution of a function after an amount of time (milliseconds)
//              Times are approximate (varies based on the workload of the workload of the javaScript runtime env.)

//              setTimeout(callback, delay);

let timeoutId;

function startTimer(){
    timeoutId=setTimeout(()=>window.alert("Hello"),3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}