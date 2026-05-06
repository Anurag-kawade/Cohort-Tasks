let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click",function(){
    let c1 = Math.floor(Math.random()*266);
    let c2 = Math.floor(Math.random()*266);
    let c3 = Math.floor(Math.random()*266);

    let left = Math.floor(Math.random()*100);
    let top = Math.floor(Math.random()*100);

    let r = Math.floor(Math.random()*360); 

    let div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.position = "absolute";
    div.style.left = left+"%";
    div.style.top = top+"%";
    div.style.rotate = r+"deg";
    
    main.appendChild(div)
    
})