// ##  Synchronous JavaScript  
// JavaScript is **single-threaded**, meaning it executes code **line-by-line**.  
// The next line runs **only after** the previous line finishes.

// ### **Example**
// console.log("A");
// console.log("B");
// console.log("C");

// ### **Output**
// A
// B
// C

// Everything runs in order.


// -----------------------------------------------------------------------------------------


// ##  Asynchronous JavaScript  
// Some tasks take time → JS offloads them to browser APIs  
// (e.g., **setTimeout, fetch, DOM events**).  
// These tasks **do not block** the main thread.

// ### **Example**
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");


// ### **Output order**
// A
// C
// B   ← (printed after 2 seconds)


// ----------------------------------------------------------------------------------------


// callback => ek function jo turant nahi chalega , ye chalega jab aapka koi kam complete hoga 
// Also  **callback** is a function passed as an argument to another function.

// ### **Example**

function greet(name,cb){
    console.log(`Hello ${name}`);
    cb();
}
greet("Anurag",()=>{
    console.log("Welcome !!!");
});




function abcd(fn){
    fn();
}

abcd(function(){
    console.log("Heyy from abcd...");
});


h1.addEventListener("click",function(){

});   //this is also an example of callback function




// callback hell 

function abcd(fn){
    fn(function(fn2){
        fn2(function () {
            console.log("haye");
        });
    });
}

abcd(function(fn){
    fn(function (fn3){
        fn3();
    });
});

function anuragSeDetailsLao(address,cb){
    console.log("Fetching details...");
    setTimeout(function(){
        cb("lat:45 , lng:60");
    },3000);
}


anuragSeDetailsLao("Aashirvadh Nivas",function(details){
    console.log(details);
});


