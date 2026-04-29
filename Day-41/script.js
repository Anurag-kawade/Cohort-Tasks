// write a higher order function runtwice(fn) that takes another function and executes it two times

// function runtwice(fnc){
//     fnc();
//     fnc();
// }
// runtwice(function(){
//     console.log("Hello World !!!");
// });





// create one pure function that always returns the same output for given input,and one impure function using a global variable 

// // pure function 
// let num = 15;
// function pure(val){
//     console.log(val);
// }
// pure(15);

// // impure function 
// function impure(val){
//     num += val;
//     console.log(num);
// }
// impure(20);





// given an array of numbers , use map() to create a new array where each number is squared
// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val){
//     return val * val;
// });
// console.log(newarr);





// use filter() to get only even numbers from an array 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newarr = arr.filter(function(val){
//     return (val % 2 === 0);
// });
// console.log(newarr);





// use reduce to find the total salary from an array of numbers [1000,2000,3000]
// let numbers = [1000,2000,3000]
// let totalSalary = numbers.reduce(function(acc,val){
//     return acc + val;
// },0);
// console.log(totalSalary);





// check the difference between Object.freeze and Object.seal

// let obj = {
//     name : "Anurag",
//     age : 21
// }
// Object.seal(obj);
// obj.name = "Harsha";

// obj.lat = "23.20";





    