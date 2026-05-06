let teams = ["Chennai Super Kings","Mumbai Indians","Delhi Capitals","Gujarat Titans","Kolkata Knight Riders","Lucknow Super Giants","Punjab Kings","Rajasthan Royals","Royal Challengers Bengaluru","Sunrisers Hyderabad"];

let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*teams.length);
    let left = Math.floor(Math.random()*100);
    let top = Math.floor(Math.random()*100);
    let r = Math.floor(Math.random()*360);
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let h4 = document.createElement("h4");
    h4.innerHTML = teams[num];

    h4.style.color = "white";
    h4.style.position = "absolute"
    h4.style.left = left+"%";
    h4.style.top = top+"%";
    h4.style.rotate = r+"deg";
    h4.style.color = `rgb(${c1},${c2},${c3})`;
    console.log(h4);
    

    main.appendChild(h4);
    
    
    
    
})