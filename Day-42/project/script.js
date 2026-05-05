let number = document.querySelector("#content");
let incbtn = document.querySelector("#inc");
let decbtn = document.querySelector("#decr");
let resetbtn = document.querySelector("#reset");

let value = 0;

incbtn.addEventListener("click",function(){
    value ++;
    number.innerHTML = value;
});

decbtn.addEventListener("click",function(){
    value --;
    number.innerHTML = value;
});

resetbtn.addEventListener("click",function(){
    value = 0;
    number.innerHTML = value;
});