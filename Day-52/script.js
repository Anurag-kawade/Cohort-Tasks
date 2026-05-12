let main = document.querySelector("main");

main.addEventListener("mousemove",(e)=>{
    document.documentElement.style.setProperty("--x",e.x+"px");
    document.documentElement.style.setProperty("--y",e.y+"px");
});

// document.documentElement to select/target the root 