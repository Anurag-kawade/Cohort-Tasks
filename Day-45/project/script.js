let btn = document.querySelector("button");
let h4 = document.querySelector("h4");
let inner = document.querySelector(".inner");

let grow = 0;

btn.addEventListener("click",()=>{
    btn.style.pointerEvents = "none";
    btn.innerHTML = "Downloading";

    let int = setInterval(()=>{
        grow++
        h4.innerHTML = grow+"%";
        inner.style.width = grow+"%";
    },50);

    setTimeout(()=>{
        clearInterval(int);
        btn.innerHTML = "Downloaded"
        btn.style.opacity = 0.5;
    },5000);

});