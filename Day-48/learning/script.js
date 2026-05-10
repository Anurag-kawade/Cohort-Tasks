let box = document.querySelector("#box");

box.addEventListener("mouseenter",function(){
    console.log("Mouse Entered...");
});

box.addEventListener("mouseleave",function(){
    console.log("Mouse Left...");
});

box.addEventListener("mousemove",()=>{
    console.log("moving...");
});

box.addEventListener("mousemove",(elem)=>{
    console.log(elem);
});

document.body.addEventListener("keydown",(elem)=>{
    console.log(elem.code);
});
