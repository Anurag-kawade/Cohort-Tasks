let para = document.querySelector("p");

let text = para.innerHTML;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function matrixText(){
    const str = text.split("").map((char,index)=>{
            if(index < iteration){
                return char;
            }
        return characters.split("")[Math.floor(Math.random()*51)];
    }).join("");

    para.innerHTML = str;

    iteration += 1;
}

setInterval(matrixText,50);
