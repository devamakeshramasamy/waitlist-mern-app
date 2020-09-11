const express=require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const user =require('./Routes/user')
const admin=require('./Routes/Admin')
require('dotenv').config();

const app=express()

app.use(bodyParser.json())



const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI;

const PORT=process.env.PORT | 5000 


mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use('/Api/user',user)
app.use('/Api/admin',admin)
app.listen(PORT,()=>{
    console.log(`Port ${PORT} is Busy`)
})