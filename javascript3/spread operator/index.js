// spread operator=.... allows an iterable such as an 
//                      array or string to be expanded
//                      into seperate elements
//                      (unpack the elements)

let numbers=[1,2,3,4,5];
let fruits=["apple","orange","banana"];
let vegetable=["carrots","celery","potatoes"];
let foods=[...fruits,...vegetable,"eggs","milk"];

let maximum=Math.max(...numbers);
let minimum=Math.min(...numbers);

console.log(minimum);
console.log(foods);