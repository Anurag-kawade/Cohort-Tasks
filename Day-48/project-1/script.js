let chutki = document.querySelector("img");
let msg = document.querySelector("h2 span");
let body = document.body;

chutki.addEventListener("mouseenter",()=>{
    msg.innerHTML = "Chutki se dur hoja ..."
    body.style.backgroundColor = "crimson";
});

chutki.addEventListener("mouseleave",()=>{
    msg.innerHTML = "Chutki se dur hi rehna ..."
    body.style.backgroundColor = "black";
});