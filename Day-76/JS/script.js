// local storage tab band , browser band krne par bhi rehta hai ,reload krne par bhi, data erase nahi hota 

// localStorage.clear();                // to clear the whole local storage (pura local storage khali kr dega)

localStorage.setItem('user','Anurag')    // to store the data in local storage , u need to give the things in key-value pair [to add new item or overwrite the existing one]

localStorage.setItem('age','21')

localStorage.setItem('username','anurag@18')

// to fetch the data from local storage we use get item
let user = localStorage.getItem('user')
console.log(user)

let age = localStorage.getItem('age')
console.log(age)


// specifically koi ek chiz hatana chahte ho (pura nahi hatana)
localStorage.removeItem('username')


//problem with the local storage 
let arr = [10,20,30,40,50]
// localStorage.setItem('arr',arr)

// console.log(localStorage.getItem(arr))
// it only stores the data in string , and not in any other data type

// same with the object also 
let obj = {
    name : 'Anu',
    age : 21,
    city : 'Mahad'
}

// localStorage.setItem('obj',obj)
//it will store as [object,Object]

// so we will convert it into string 
// let arr = [10,20,30,40,50]
let newarr = JSON.stringify(arr);
localStorage.setItem('arr',newarr)    // stores data like this -> [10,20,30,40,50]  

let newobj = JSON.stringify(obj)
localStorage.setItem('obj',newobj)   // stores data like this -> {"name":"Anurag","age":21,"city":"Mahad"}
// can also write like this 
// localStorage.setItem('obj',JSON.stringify(obj))


// console.log(localStorage.getItem('obj'))  it will give the o/p in string but we want the data in the format as we have saved
//so use parse

let storageObj = localStorage.getItem('obj')    // pehle string wala data lao

let parseObj = JSON.parse(storageObj)           //fir use object mai convert kro 

console.log(parseObj)





// session storage 
// session storage tab tak rehta hai , jab tak aapne use tab ko open rakha hai , tab band kiya to data bhi chala gaya (yani ki session jab tak rahega tab tak hi data rahega isliye session storage) 
// baki sare method same hai localstorage ki tarah -> getItem setItem 