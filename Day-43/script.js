let boxColor = document.getElementById("box");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    boxColor.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
});
