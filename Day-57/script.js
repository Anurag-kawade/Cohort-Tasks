// // // class MineralWater{
// // //     constructor(name,color,price){
// // //         this.name = name;
// // //         this.color = color;
// // //         this.price = price;
// // //     }
// // // }

// // // let mineralWater1 = new MineralWater("Bisleri","Blue",20);
// // // let mineralWater2 = new MineralWater("Kinley","White-Blue",18);
// // // let mineralWater3 = new MineralWater("Amrut","Black",15);
// // // let mineralWater4 = new MineralWater("Rajhans","Bluish",10);




// // // // Prototypes -> shared memory 

// // // class sketch{
// // //     constructor(){
// // //         this.name = "doraemon";
// // //         this.color = "blue";
// // //         this.someFnc = function(){};
// // //     }
// // // }

// // // sketch.prototype.speak = function (){};
// // // sketch.prototype.walk = function (){};
// // // // line 27 and 28 shows the way to create an prototype 
// // // // but interestingly whatever you write outside the constructor inside the class , automatically becomes an prototype , i.e shared memory 
// // // // so better you write it in the below way 

// // // class sketch{
// // //     constructor(){
// // //         this.name = "doraemon";
// // //         this.color = "blue";
// // //         this.someFnc = function(){};
// // //     }
// // //     speak(){}
// // //     walk(){}
// // // }

// // // // REM -> constructor ke andar jo bhi bana rahe ho , wo object ka khud ka hoga 
// // // //        constructor ke bahar jo bhi bana hoga , wo shared memory hoga 
// // // // class mai ek hi constructor hota hai , multiple constructor nahi hote 




// // // // this 

// // // console.log(this);   // the value of this here is => window


// // // function abcd(){
// // //     console.log(this);  // the value of this here is => window
// // // }
// // // abcd();


// // // let obj = {
// // //     name : "Anurag",
// // //     fnc = function(){
// // //         console.log(this);   // the value of this here is => object
// // //     }
// // // }
// // // obj.fnc(); 

// // // // now 

// // // let obj = {
// // //     name : "Anurag",
// // //     fnc = function(){
// // //         function defg(){
// // //             console.log(this);   // the value of this here is => window
// // //         }
// // //         defg();
// // //     },
// // // };
// // // obj.fnc(); 

// // // // lekin ab aap usi andar wale function ko arrow function bana do 

// // // let obj = {
// // //     name : "Anurag",
// // //     fnc = function(){
// // //         let defg = ()=>{
// // //             console.log(this);   // the value of this here is => object
// // //         }; 
// // //         defg();
// // //     },
// // // };
// // // obj.fnc();

// // // // now the question is how will u remember the value of this keyword 
// // // // Global -> window
// // // // Function -> window
// // // // es5 Function inside Object -> Object
// // // // es6 Function inside Object -> window
// // // // es5 Function inside es5 Function inside Object -> window
// // // // es6 Function inside es5 Function inside Object -> object

// // // // more usecase/value of this 
// // // let h1 = document.querySelector("h1");
// // // h1.addEventListener("click",function(){
// // //     console.log(this);  //yaha event listener h1 per laga hai toh this ki value h1 tag hoga i.e <h1>heyy</h1>
// // // });



// // // // call apply bind
// // // // ek function mai this ki value window hoti hai , agar aap chahte ho ki vo value window na ho par koi aur object ho tab aap use kr sakte ho call apply bind ka 

// // let obj = {
// //     name:"Anurag",
// // };
// // function abcd(){
// //     console.log(this);
// // }
// // // abcd(); yese normally call krne par this ki value window hogi 
// // // lekin hume this ki value obj nam ke object set krni hai , so use 
// // abcd.call(obj);  //now this value is the object name obj




// let obj = {
//     name:"Anurag",
// };

// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// abcd.call(obj,1,2,3);   
// // now here by using call , yaha obj nam ka object this ki value set krega and baki parameters honge function ke 






// let obj = {
//     name:"Anurag",
// };

// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// abcd.apply(obj,[1,2,3]);   
// // now here by using apply , yaha obj nam ka object this ki value set krega and baki parameters array se pass honge  function ke liye 





//bind is similar to call 
let obj = {
    name:"Anurag",
};

function abcd(a,b,c){
    console.log(this,a,b,c);
}
let newfnc = abcd.bind(obj,1,2,3);   
// bind is similar to call , but bind returns a new function ; u need to store it in another variable and call it later 
newfnc();



// INSHORT
// call -> fnc chalta hai and this ki value set krta hai 
// apply -> wahi krta hai jo call krta hai and arguments main pehli value this ki and doosri value aaray hoti hai 
// bind -> wahi krta hai jo call krta hai aapko naya fnc deta hai 