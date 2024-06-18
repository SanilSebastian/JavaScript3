// string method = allow you to manipulate and work with text (strings)

let phoneNumber = "123-456-7890";
let userName = "BroCode ";

phoneNumber = phoneNumber.padStart(15);

userName = userName.trim();
console.log(phoneNumber);
console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
console.log(userName);
userName=userName.toUpperCase();
console.log(userName);
userName=userName.toLowerCase();
console.log(userName);
userName=userName.repeat();
console.log(userName);
let result=userName.startsWith(" ");
console.log(result);
if(result){
    console.log("Your username cant end ` ` ");
}
else
{
    console.log(userName);
}