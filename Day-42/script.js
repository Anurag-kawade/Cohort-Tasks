// DOM
// Selecting an Element

let heading = document.querySelector("h1");
console.log(heading);

let idSelection = document.querySelector("#hero");
console.log(idSelection);

let classSelection = document.querySelector(".element");
console.log(classSelection);


// changing the html
heading.innerHTML = "Changed !!!";

// changing the css
heading.style.color = "red";
heading.style.backgroundColor = "white";



// Event Listener
heading.addEventListener("click",function(){
    console.log("You clicked it ...");
});

heading.addEventListener("dblclick",function(){
    console.log("You double-clicked it ...");
})


let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("Submitted ...");
});



let info = document.querySelector("#info");
let btns = document.querySelector("#btn");

btns.addEventListener("click",function(){
    info.innerHTML = "I am Batman ...";
    info.style.color = "blue";
});