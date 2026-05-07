let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    h2.innerHTML = "Changing...";
    setTimeout(function(){
        h2.innerHTML = "I Am Anurag";
    },2000); 
});


// setInterval(function(){
//     console.log("Heyy there ...");
// },5000);

// let value = 0;
// let num = setInterval(() => {
//     if(value === 11){
//         clearInterval(num);
//     }else{
//         console.log(value);
//         value++;
//     }
// }, 500);



