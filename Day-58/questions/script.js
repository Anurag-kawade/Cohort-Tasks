// SECTION 1: Objects and OOPS Thinking (Foundation)

// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

let user = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user.login();

// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// without a class you will need to write 5 objects for 5 users i.e a object for a single user 
let user1 = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user1.login();

let user2 = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user2.login();

let user3 = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user3.login();

let user4 = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user4.login();

let user5 = {
    name:"Anurag Suresh Kawade",
    email:"anurag.workzone@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};
user5.login();

// now converting it to a class , i.e cleaner code 
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.login = function(){
            console.log("User logged in");
        };
    }
}

let user_1 = new User("Anurag","anurag@gmail.com");
let user_2 = new User("Swadhintha","swadhintha@gmail.com");
let user_3 = new User("Suresh","anurag@gmail.com");
let user_4 = new User("Gitanjali","gitanjali@gmail.com");
let user_5 = new User("xyz","xyz@gmail.com");




// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
    name:"cap",
    price:500,
    discountedPrice : function(){
        return this.price - 100;
    },
};

console.log(product.discountedPrice());

// The goal of this section was to understand why keeping data and behavior together makes code easier to manage.



// -----------------------------------------------------------------------------------------


// SECTION 2: Classes and Objects

// 4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }

    drive(){
        console.log(this.brand," ",this.speed);
    }
}

let c1 = new Car("BMW",80);
c1.drive();


// 5.	Create two different car objects from the same class and verify that their data is different.

class Gadi{
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
}

let g1 = new Gadi("Mercedes",150);
let g2 = new Gadi("Audi",110);



// 6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// ANS -> if classes won't exists , then we would have to write many objects which is hectic and also the code would be lengthy and not readable and scalable for big projects 




// ----------------------------------------------------------------------------------------------





// SECTION 3: Constructor and this keyword

// 7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values. 

class Student{
    constructor(name,roll_number){
        this.name = name;
        this.roll_number = roll_number;
    }

    introduce(){
        console.log(this.name +" "+this.roll_number);
    }
}
let s1 = new Student("Anurag",18);
s1.introduce();



// 8.	Inside the constructor, set values using this. => ANS :- Already done
// Then try removing this and notice what error occurs and why.  => ANS :- undefined , its the syntax



// 9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

let obj1 = {
    fnc : function(){
        console.log(this);
    },
};

let obj2 = {
    fnc : ()=>{
        console.log(this);
    },
};

obj1.fnc();  // using normal function the value of this is the object 
obj2.fnc();  // using arrow function the value of this is the window







// SECTION 4: Constructor Functions and Prototypes

// 10.	Create a User constructor function (do not use class syntax).

// bina class ke bhi constructor function banate hai 
// es6 se pehle constructor function aise bante the 

function User11(){           
    this.name = "bakra";
}
let user11 = new User();
//es6 mai class and naye tarike se constructor likhne ka update aya , uss se pehle yese constructor banate the ; normal function likh ke uske aage uska nam Capital letter mai likte the and andar this ka use krte the 
// This is how you make constructor function without class 




// 11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

class LogIn{
    // constructor(){
    //     this.login = function(){
    //         console.log("Logged In1");
    //     }
    // }

    login(){
        console.log("Logged In2");
    }
}

let user12 = new LogIn();
user12.login();




// 12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

class LoggedIn{
    constructor(val){
        this.name = val;
        this.login = function(){
            console.log("Logged In1");
        }
    }

    loggin(){
        console.log("Logged In2");
    }
}
let aman = new LoggedIn("aman");
let raj = new LoggedIn("raj");
console.log(aman.login === raj.login);    // false 
console.log(aman.loggin === raj.loggin);  // true 

// bcoz constructor ke andar ka login khud ka seperate login hai , and prototype ke andar ka shared loggin hai , isliye wo true dikha raha hai 



// -------------------------------------------------------------------------------------------


// SECTION 5: call, apply, bind
// 13.	Create a function that prints this.name.
function abcd(){
    console.log(this.name);
}
let obj = {
    name:"anurag",
};
abcd.call(obj);
abcd.apply(obj);
let newfnc = abcd.bind(obj);
newfnc();