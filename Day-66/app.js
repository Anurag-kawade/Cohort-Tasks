// // function add(a,b){
// //     return a + b;
// // }

// // export default add;   // ek hi bar export default kr sakte hai ; i.e a module can not have multiple default exports 

// // -----------------------------------------------------------------------------------------

// // export function multiply (a,b){
// //     return a * b;
// // }

// //another way

// function multiply (a,b){
//     return a * b;
// }

// // export {multiply};

// // how to export multiple things 

// function substraction(a,b){
//     return a - b;
// }

// export {multiply,substraction};


// // how to export multiple things by changing name
// // export {multiply as muli,substraction as subst};

function add (a,b){
    return a + b;
}

function mul(a,b){
    return a * b;
}

export{add,mul};