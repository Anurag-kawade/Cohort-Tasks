const express = require("express")

const app = express()       // server instance create krna 

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("This is About Page")
})

app.get('/home',(req,res)=>{
    res.send("This is Home Page")
})

app.get('/contact',(req,res)=>{
    res.send("This is Contact Page")
})

app.listen(3000)           // server start krna 

