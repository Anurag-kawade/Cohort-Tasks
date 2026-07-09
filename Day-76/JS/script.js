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