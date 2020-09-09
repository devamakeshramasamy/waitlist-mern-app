
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');

const mongoose = require('mongoose')
require('dotenv').config();
const uri= process.env.ATLA_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    message="MongoDB is connected Successfully"
    console.log(chalk.green(message))
})
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});