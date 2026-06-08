// class expression -> matlab kisi bhi class ko variable mai save krna ; sab kuch same hota hai bas class ka nam class ke samne na likh ke varibale ka nam hi class ka nam hota hai 

// let Animal = class{                       // this is class Expression 
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed;
//     }
// }

// let an1 = new Animal("dodo","dog");
// let an2 = new Animal("billa","cat");

// we dont usually write class like this i.e storig the class in variable , generally we prefer the class name written infront of the class keyword 
// i.e -> 
// class Animal{                   // this is Class Declaration / Statement
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed;
//     }
// }

// let an1 = new Animal("dodo","dog");
// let an2 = new Animal("billa","cat");


// abh in dono mai farak kya hai ? ; farak hositing ka hai 

// let an1 = new Animal("dodo","dog");
// let Animal = class{
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed;
//     }
// }
// iska output hoga =>  Cannot access 'Animal' before initialization
// class ban ne ke pehle use nahi kr paoge , class ban ne ke bad hi use kr paoge 

// let an1 = new Animal("dodo","dog");
// class Animal{                   // this is Class Declaration / Statement
//     constructor(name,breed){
//         this.name = name;
//         this.breed = breed;
//     }
// }





// Concept of Inheritance 
// agar koi class hai jismein kuch kuch likha hai and aap mante ho ek nayi class usi ka extension hai to aap wo sare features purani class se borrow kar sakte ho and nayi class mein use kar sakte ho and apne naye features bhi bana sakte ho 

// class Animal {
//     constructor(name,color,breed){
//         this.name = name;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// class Dog extends Animal{
//     constructor(name,color,breed,age){
//         super(name,color,breed);
//         this.age = age;
//     }
// }
// let dog1 = new Dog("dodo","white","dog","50");






// getter and setter 
// in constructor you can write this.age 
// ex =>
// class Animal {
//     constructor(){
//         this.age = 15;
//     }
// }
// let a1 = new Animal;
// a1.age = 50;
// this way you can change the values 
// but what is we want to make private variables ?
// so we have setter and getter 
class Animal{
    constructor(){
        this._age = 25;     //_age matlab hota hai ki private variable 
    }

    set huihui(val){  //set function mai jarurat nahi usska nam age likhna , u can write any name
        if(val < 0){
            console.error("not");
            return;
        }
        this._age = val;
        return;
    }

    get huihui(){
        return this._age;
    }
}
let a1 = new Animal;
a1.huihui = 37;        