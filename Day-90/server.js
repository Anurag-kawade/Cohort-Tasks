const app = require('./src/app');

const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb+srv://anuragworkzone_db_user:I2BjvgwVSmyGvHg2@cluster0.xjvajbl.mongodb.net/Day-90')

    .then(()=>{
        console.log('Connected to Database')
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})