let main = document.querySelector("main");
let cursor = document.querySelector("img");

main.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});