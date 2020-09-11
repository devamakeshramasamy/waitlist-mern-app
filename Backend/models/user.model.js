const mongoos=require('mongoose')
const Schema=mongoos.Schema
const userSchma=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    refid:{
        type:String,
        required:true
    },
    queue:{
        type:Number,
        required:true
    }
})

module.exports=user=mongoos.model('user',userSchma)