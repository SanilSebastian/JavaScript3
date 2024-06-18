//forEach() = method used to iterate over the elements
//            of an array and apply a specified function (callback)
//            of each element

//            array.forEach(callback)
//            element,index,array are provided

let fruit =["apple","orange","banana","coconut"];

fruit.forEach(capitalize);
fruit.forEach(display);

function upperCase(element,index,array){
    array[index]=element.toUpperCase();
}

function lowercase(element,index,array){
    array[index]=element.toUpperCase();
}

function capitalize(element,index,array){
    array[index]=element.CharAt(0).toUpperCase()+element.slice(1);   
}

function display(element){
    console.log(element);
}