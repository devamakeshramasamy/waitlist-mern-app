const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchma=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
})
const user = mongoose.model('user',userSchma);
module.exports=user