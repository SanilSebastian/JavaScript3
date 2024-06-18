//switch = can be an efficient replacement to many else if statements

let testscore=99;
let letterGrade;

switch (true) {
    case testscore>=90:
        letterGrade='A';
        break;
    case testscore>=80:
        letterGrade='B';
        break;
    case testscore>=70:
        letterGrade='c';
        break;
    case testscore>=60:
        letterGrade='D';
        break;        
    default:
        letterGrade="F";
        break;
}
console.log(letterGrade);

let day=2;

switch(day){
    case 1:
    console.log("It is Monday");
    break;
    case 2:
    console.log("It is Tuesday");
    break;
    case 3:
    console.log("It is Wednesday");
    break;
    case 4:
    console.log("It is Thurday");
    break;
    case 5:
    console.log("It is Friday");
    break;
    case 6:
    console.log("It is Saturday");
    break;
    case 7:
    console.log("It is Sunday");
    break;
}