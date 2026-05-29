// OOPS -> Object Oriented Programming System

// jab code chota hota hai toh fir aap kuch bhi kr sakte ho bina koi guideline follow kiye and jab code bada ho jata hai tab role mai aata hai guidelines 

// now we will write the code in the form of objects , classes and functions 

// ek bande ki details ek sath rakhne ke liye aapke pas objects hai 
// creating an object 

let user1 = {
    name : "Anurag Suresh Kawade",
    age : 22,
    email : "anurag@gmail.com"
};

// classes
// jabhi class banate ho , toh class ka nam Capital Letter se shuru hona jaruri hai 
// hamesha pehli chiz , constructor banao 
// classes banate hai taki hame har bar ek naya object mil jaye 
// classes object ki factory hai 
// har bar new keyword ke sath class run karoge to ek naya object milega    

class BiscuitMaker{
    constructor(brandName,price,color){
        this.name = brandName;
        this.price = price;
        this.color = color;
    }
}

let biscuit1 = new BiscuitMaker("Parle-G",5,"Brown");
let biscuit2 = new BiscuitMaker("Marie-Gold",10,"Reddish-Brown");
let biscuit3 = new BiscuitMaker("Krack-Jack",20,"Brownish");

