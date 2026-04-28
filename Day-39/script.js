// write a function sayHello() that prints "Hello Javascript"
// function sayHello(){
//     console.log("Hello Javascript");
// }
// sayHello();


// create a function add(a,b) that returns their sum and log their result
// function add(a,b){
//     return a + b;
// }

// let ans = add(5,10);
// console.log(ans);




// write a function with a default parameter name = "Guest" that prints "Hi<name>",
// function greet(name="Guest"){
//     console.log(`Hi ${name}`);
// }
// greet();




// use rest parameters to make a function that adds unlimited numbers
// let summ = 0;
// function add(...val){
//     val.forEach(function(value){
//         summ += value;
//     });
// }
// add(1,2,3,6);
// console.log(summ);

// alternative way

// function add(...val){
//     let ans = val.reduce(function(accumulator,value){
//         return accumulator + value;
//     },0);
//     console.log(ans);
// }
// add(1,2,3,6,2);






// create an IIFE that prints "I run instantly!"
// (function(){
//     console.log("I run instantly!");
// })();




// make a nested function where the inner one prints a variable from the outer one 
// function abcd(){
//     let num = 18;
//     function efgh(){
//         console.log(num);
//     }
//     efgh();
// }
// abcd();





// create an array of 5 fruits. Add one at the end and remove one from the beginning
// let fruits = ["Mango","Banana","Grapes","Orange","Kiwi"];
// fruits.push("Strawberry");
// fruits.shift();
// console.log(fruits);




// use a for loop to print all elements of an array
// let fruits = ["Mango","Banana","Grapes","Orange","Kiwi"];
// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }




// create an object person with keys name,age,and city,and print each keys value
let person = {
    name : "Anurag Kawade",
    age : 21,
    city : "Pune",
}
for(let value in person){
    console.log(person[value]);
}