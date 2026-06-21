// import add from "./app.js"
// import addition from "./app.js"   // ye bhi chaelga,i.e same nam se nahi import kiya fir bhi chalega , the reason is kyu ki tum default export kr rahe ho isliye kuch bhi nam chalega , default export mai mattter nahi krta 

// console.log(addition(5,2));

// -----------------------------------------------------------------------------------------

// import { multiply } from "./app.js";

// let ans = multiply(5,8);
// console.log(ans);

// you can rename the import while importing it 
// import { multiply as mul } from "./app.js";
// let ans = mul(5,4);
// console.log(ans);




// how to import multiple things 

// import { multiply,substraction } from "./app.js";

// let ans1 = multiply(5,6);
// let ans2 = substraction(10,5);
// console.log(ans1,ans2);


// how to import the same bu changing name
// import { multiply as mul,substraction as subs} from "./app.js";

// let ans1 = mul(5,6);
// let ans2 = subs(10,5);
// console.log(ans1,ans2);


// how to import everything universally ?
import * as utility from "./app.js"

let ans1 = utility.add(2,3);
let ans2 = utility.mul(2,7);

console.log(ans1,ans2);