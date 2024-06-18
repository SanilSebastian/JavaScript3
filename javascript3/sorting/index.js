// sort() = method used to sort elements of an array in place.
//          Sort elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings
let fruits=["apple","orange","banana","coconut","pineapple"];
let numbers=[1,10,2,9,3,8,4,7,5,6];
const people=[{name:"Spongebob",age:30,gpa:3.0},
            {name:"Patrick",age:37,gpa:1.5},
            {name:"Squidward",age:51,gpa:2.5},
            {name:"Sandy",age:27,gpa:4.0}]

fruits.sort();
numbers.sort();
people.sort((a,b) => a.gpa-b.gpa);

console.log(fruits);
console.log(numbers);
console.log(people);

numbers.sort((a,b)=>b-a);
people.sort((a,b) => b.gpa-b.gpa);

console.log(numbers);
console.log(people);

people.sort((a,b) => b.name-b.name);
console.log(people);

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);

people.sort((a,b)=>b.name.localeCompare(a.name));
console.log(people);


