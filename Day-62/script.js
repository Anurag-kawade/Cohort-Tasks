// Introduction to Error Handling
// Error kya hota hai ? => code mai koi dikat ana koi bhi prakar ki dikat jese code likte wakt , code chalt wakt, kuch aisa likh diya jo ho hi nahi sakta 

// Why error handling ?
// man lo code 500 line ka hai , error 30 line par aya hai , to uske wajaha se 31 line se aage code nahi chalega ; isliye error handling jaruri hai 


// Common Types of Errors in JS - ['Syntax Errors','Runtime Errors','Logical Errors']
// syntax error -> aapne code main likhte wakt galti kardi 
// ex :
// let a = 15; yaha koi galti nahi 
// leht a = 15; this is syntax error;matlab aapke code ke format mai hi koi galti hai ; iska output hoga => Uncaught SyntaxError: Unexpected identifier 'a' (at script.js:12:6)



// Runtime error => code likhte wakt error nahi hai , jab chalega tab error dega 
// ex : 
function abcd(){
    let a = 15;
    console.log(a.name.first);
}
// yaha tak koi error nahi hai , kyu ki aapne sirf likha hai 
abcd(); //abh error dega , kyuki a.name.first yesa kuch object nahi hai 
// op -> script.js:20 Uncaught TypeError: Cannot read properties of undefined (reading 'first')
    // at abcd (script.js:20:24)
    // at script.js:23:1


// logical errors -> aapke code ko kuch krna chaiye tha par wo kar kuch aur raha hai 

function add(a,b){
    return a - b;
}
add(5,2); 
// this is logical error , aap expect krte ho ans would be 5+2=7 , but the code does 5-2=3 ; so this is logical errors 
// logical error screen par kabhi koi error nahi deta 

// concept of try and catch 
// try and catch are error handlers , these handles the error 

try{
    let a = 21;
    console.log(a.age.num);
}catch(err){
    console.log(err);
}
// agar code mai error aya toh try and catch ke help se aapka code crash nahi hoga 



// Understanding the Error Object - ['message','name','stack']

try {
    let a = 15;
    console.log(a.age.name);
}catch(err){
    console.log(err.message);  //Cannot read properties of undefined (reading 'name'); yesa ayega , matlab sirf message ayega 
    console.log(err.name); //TypeError , matlab sirf error ka nam ayega 
    console.log(err.stack); // TypeError: Cannot read properties of undefined (reading 'name')
    // at script.js:55:23   ; matlab yesa pura detail mai ayega 
}

// the concept of finally 
// chahe aapke code mai koi dikat ho ya na ho par aapko kuch kuch kam jaroor krna hai , toh aap finally use krte ho 
try{
    let age = 50;
    console.log(age);
}catch(err){
    console.log(err);
}finally{
    console.log("huihui")
}
// we know that agar try chalega toh catch nahi chalega , i.e either of one koi toh chalega ; but ir-respective of dono mai se koi bhi chala , finally jarur chalta hai 


// How to throw errors in JS ?
// throw new Error("something went wrong ")   => this is customize error 

try{
    let a = 50;
    console.log(a.name.age);
}catch(err){
    throw new Error("Something went wrong from our side...");
    // console.error(new Error("Something went wrong from our side..."));  can also use this 
}