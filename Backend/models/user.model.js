const mongoos=require('mongoose')
const Schema=mongoos.Schema
const userShema=new Schema({
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
    },queue:{
        type:Number,
        required:true
    }
})

module.exports=user=mongoos.model('user',userShema)