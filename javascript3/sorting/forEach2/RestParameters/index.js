//rest parameters=(...rest)allow a function work with a variable
//                number of arguments by bunding them into an array

//                spread=expands an array into seperate elements
//                rest=bundles seperate elements into array

function openFridge(...foods){
   console.log(...foods);
}
function getFood(...foods){
    return foods;
}
function sum(...number){
    let result=0;
    for(let number of number){
        result+=number;
    }
   return result;
}
function getAverage(...number){
    let result=0;
    for(let number of number){
       result+=number;
    }
    return result/number.length;
}

const food1="pizza";
const food2="hamburger";
const food3="hotdog";
const food4="sushi";
const food5="ramen";

//openfridge(food1,food2,food3,food4,food5);
const foods=getFood(food1,food2,food3,food4,food5);
const total= getAverage(75,100,85,90,50);

console.log(total);
console.log(foods);
