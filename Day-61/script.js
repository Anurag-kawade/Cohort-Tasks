// we will learn -> promises
// async await
// setTimeout and setInterval

// promises -> ek kam jaake karo 
// promises ke 3 state hote hai 
// abh data lane ke liye bheja tumne 
// jese tumne bheja wo hota hai - pending state
// man lo server ne data bheja - resolved state 
// man lo server ne kaha bhaj - reject state

// ex : facebook ke pass jao aur mera data lao 
// abh jab tak aap wapas nahi aate tab tak aap ho pending state mai 
// abh ek toh aap data laya honge ya fir error 
// data aya toh -> resolve ; error aya toh -> reject 

let prm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    },3000);
});
prm
.then(()=>{
    console.log("resolved...");
})
.catch(()=>{
    console.log("rejected...");
});

// USECASE :- 

let pr = new Promise((resolve,reject)=>{
    // logic to go to meta and get data 
    // if data aya -> resolve 
    // else reject 
});
pr.
then(function(){

})
.catch(function(){

});



// fetch
// fetch se kisi bhi url par jaa sakte hai aur data laa sakte hai 
// fetch ka data readable nahi hota 
// usey json banake readable karte hai 
// iske bad jo data milta hai wo readable hota hai 

fetch("https://randomuser.me/api/") //can use double,single or back ticks
.then(function(unReadableData){
    return unReadableData.json();
})
.then(function(Readabledata){
    console.log(Readabledata);
})

// REMEMBER := fetch mai do bar then lagte hai 
// fetch mai do .then lagte hai ; pehle mai raw data aata hai ; dusre mai readable data aata hai 

// same syntax of the above , in short 
fetch("https://randomuser.me/api/")
.then((raw) => raw.json())   // fat arrow fnc mai agar curly bracket nahi lagaye uska matlab hai ki wo fnc return hoga ,i.e here raw.json return hoga 
.then((data)=> {
    console.log(data);
});

// in more short 
fetch("https://randomuser.me/api/")
.then(raw => raw.json())   // fat arrow fnc mai agar curly bracket nahi lagaye uska matlab hai ki wo fnc return hoga ,i.e here raw.json return hoga 
.then(data=> {
    console.log(data);
})
// now will use catch here 
// matlab agar upar ka kuch bhi galat/error hojaye toh catch chalega 
.catch(err => {        // jo bhi error hoga , matlab ki reject per jo bhi error dega wo err mai pass hoga yaha
    console.log(err);  
});



// async await 
// async await , promise pe kam krta ha 
// async await , then ko replace kr dete hai ; helps in writing clean and readable code 
// await 99.99% mai kisi function mai hi likhna hota hai ; and async parent function ke aage likhna hota hai 

// fetch("https://randomuser.me/api/") //can use double,single or back ticks
// .then(function(unReadableData){
//     return unReadableData.json();
// })
// .then(function(Readabledata){
//     console.log(Readabledata);
// })

// ye upar wala example hai ; isko convert krenge async await mai 

async function abcd(){
    let rawData = await fetch("https://randomuser.me/api/")
    let data = await rawData.json()
    console.log(data);
}
abcd();



function getNum(){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*10);
        if(num < 5){
            reject(false);
        }
        else{
            resolve(true);
        }
    })
}
async function abcd(){
    let ans = await getNum();
    console.log(ans);
}
abcd();