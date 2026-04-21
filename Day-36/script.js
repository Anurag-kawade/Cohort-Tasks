// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let counter = 0;
// let attempt = 5;
// while(attempt > 0){
//     let number = prompt("Enter number:");
//     if(number >= 0){
//         counter++;
//     }
//     attempt --;
// }

// console.log(counter);




// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let withdrawal_limit = 3;
let balance = 1000;
while(withdrawal_limit > 0){
    let amount_withdraw = +prompt("Enter the withdraw amount:");
    if(balance >= amount_withdraw){
        console.log(`Successfully deducted an amount of:${amount_withdraw}`);
        console.log(`Your current balance is ${balance - amount_withdraw}`);
        balance = balance - amount_withdraw;
    }
    else{
        console.error("Not enough balance !!!");
    }
    withdrawal_limit --;
}