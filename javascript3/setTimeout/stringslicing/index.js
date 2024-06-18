// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start,end)

const fullName = "clown dog";
const email="fake@gmail.com";

let userame=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);
let firstname1=fullName.slice(0,3);
let lastname1=fullName.slice(4,8);
let firstchar=fullName.slice(0,1);
let lastchar=fullName.slice(-1);
let firstname2=fullName.slice(0,fullName.indexOf(" "));
let lastname2=fullName.slice(fullName.indexOf(" ")+1)
console.log(userame);
console.log(extension);
console.log(firstname1);
console.log(lastname1);
console.log(firstchar);
console.log(lastchar);
console.log(firstname2);
console.log(lastname2);