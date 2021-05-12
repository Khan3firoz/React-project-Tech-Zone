const express = require('express');
const env = require('dotenv')
const bodyPerser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path')


const app = express();


//routes

const userRoutes=require('./routes/user')

//envrionment variable or you can say constant
env.config({ path: path.resolve(__dirname, '../.env') });
const port = process.env.PORT;

//mongodb connection
var db=`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster1.zvyt1.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }).then(() => {
        console.log('Database connected successfully')
    }).catch((err) => {
        console.log(err)
    });
app.use(bodyPerser())

app.use('/api',userRoutes)


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})