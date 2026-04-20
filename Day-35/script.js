// 12.Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let count = 0;
let word ="";

while(word !== "stop"){
    word = prompt("Enter your word:");
    if(word === "yes")count++;
}
console.log(`You typed the word "yes" ${count} times`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i=1; i<=50; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}




// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;
for(let i=1; i<=30; i++){
    if(i % 2 === 1){
        sum += i;
    }
}
console.log(sum);



// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let num = prompt("Enter a number:");

while((num % 2) === 1){
    num = prompt("Enter a number:");
}


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let input1 = prompt("Enter 1 number:");
let input2 = prompt("Enter 2 number:");

for(let i=input1; i<=input2; i++){
    console.log(i);
}



// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let count = 0;

for(let i=1; i<=20; i++){
    if(count === 3) break;  
    if(i % 2 === 1){
        console.log(i);
        count++;
    }
}




