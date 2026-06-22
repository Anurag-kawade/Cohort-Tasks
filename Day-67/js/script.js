// // function name(){
// //     console.log("heyy my name is Anurag!!!");
// // }

// // name();  // op => heyy my name is Anurag!!!
// // iska op yesa aya kyuki maini bas name fnc chalaya , jisme tha -> heyy my name is Anurag!!!

// // console.log(name());  // op => heyy my name is Anurag!!!
//                          //       undefined
// // yesa op kyu ?
// // tumne fnc ko log kiya , name ko call krke , heyy my name is Anurag!!! aapne call kiya isliye yese aya and aapne fnc ko log kiya yaha fnc ki value kuch nahi isliye undefined log kiya

// // yahi agar kuch return kiya hota toh

// function name(){
//     console.log("heyy my name is Anurag!!!");

//     return 10;
// }
// console.log(name());
// // op hoga => heyy my name is Anurag!!!
// //            10




let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hii from Anurag...";
    document.body.appendChild(h1);
})