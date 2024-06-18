// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document object Model)

// 1. document.getElementById()        // ELEMENT OR NULL
// 2. document.getElementClassName()   // HTML COLLECTION
// 3. document.getElementByTagName()   // HTML COLLECTION
// 4. document.querySelector()         // ELEMENT OR NULL
// 5. document.querySelectorAll()      // NODELIST

const h4Elements=document.getElementsByTagName("h4");
const liElements=document.getElementsByTagName("li");
const element=document.querySelector(".fruits");



Array.from(h4Elements).forEach(h4Elements=>{
    h4Elements.style.backgroundColor="yellow";
});

Array.from(liElements).forEach(liElements =>{
    liElements.style.backgroundColor="lightgreen";
});