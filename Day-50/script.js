let allBtn = document.querySelectorAll("button");
allBtn.forEach((dets)=>{
   dets.addEventListener("click",()=>{
    if(dets.innerHTML === "Add Friend"){
        dets.innerHTML = "Remove Friend";
    }
    else{
        dets.innerHTML = "Add Friend";
    }
   });
});