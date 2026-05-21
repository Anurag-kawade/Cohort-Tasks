let h1 = document.querySelector("h1");

let name = h1.innerHTML;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function randomText(){
    let str = name.split("").map((char,index)=>{
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random()*51)];
    }).join("");

    iteration += 0.25;

    h1.innerHTML = str;
}

setInterval(randomText,30);