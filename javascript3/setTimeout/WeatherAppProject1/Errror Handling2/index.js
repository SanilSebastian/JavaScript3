// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

try{
    console.log("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error); 
}
finally{
    // ClOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCE
    console.log("This always executes");
}
console.log("You have reached the end!");
