// debouncing and throttling 
// ye code static hota hai , aajkal koi bhi hat se debouncing and throttling ka code nahi likhta 


// 1. Debouncing
// What it does:
// Waits until an event stops firing for a specified amount of time before executing the function.
// Example
// Imagine a search box:
// User types: h → he → hel → hell → hello
// Without debouncing: API called on every keystroke.
// With debouncing (500ms): API called only once, 500ms after the user stops typing.

function debounce(fn,delay){
    let timer;             // by default timer pehle se undefined hota hai 
    return function(){
        clearTimeout(timer);  
        timer = setTimeout(fn,delay);
    };
}

let text = document.querySelector("#search")
.addEventListener("input",debounce(function(){
        console.log("chala");
    },500)
);

// debounce is in short , yaha 500ms hai toh hum bolne mai 500ms lenge ; debounce hai ki agar 500ms tak aap kuch nahi bologe toh ek bar chalega , fir kuch bologe wapas 500ms kuch nahi bologe toh fir chalega



// ----------------------------------------------------------------------------------------


// 2. Throttling
// What it does:
// Ensures a function executes at most once within a specified time interval.
// Example : 
// Suppose a user scrolls a page:
// Scroll event fires hundreds of times per second.
// With throttling (200ms), the handler runs only once every 200ms.

// throttling hota hai ki , man lo yaha 2000ms ka time pakad lo ; throttling hai ki agar aap kuch continuos action kar rahe ho toh har 2 sec mai ye throttling ka fnc chalega , lekin jese hi aap kuch action krna band kr jaoge waise hi uss moment pai throttling ka fnc band hojayega 

// let body = document.querySelector("body");
// body.addEventListener("mousemove",function(e){
//     console.log(e.clientX,e.clientY);
// })
// upar ka code mouse ki location deta hai , lekin wo har time ka updated x and y deta hai , aage jake hum animations padhenge tab hum yese animations agar is tarah move krenge toh wo lag honge , isliye hum une har 2 sec mai update krenge metlab ki mouse ki location , isliye yaha hum throttling ka use krenge 
// yaha 2 sec humne time randomly liya hai 

function throttling(fn,delay){
    let timer = 0;
    return function(){
        let now = Date.now();
        if(now - timer >= delay){
            fn();
            timer = now;
        }
    }
}
let body = document.querySelector("body");
body.addEventListener("mousemove",throttling(function(){
    console.log("Anurag");
},2000));



// ----------------------------------------------------------------------------------------------


// JSON parse and JSON stringify
// JSON -> Javascript Object Notation 
// Internet pai data JSON mai transfer hota hai 

// JSON parse     -> json se object banate ho 
// JSON stringify -> json banate ho  

let data = {
    name : "Anurag",
    age : 21
};

let stringify_data = JSON.stringify(data);

let parse_data = JSON.parse(stringify_data);