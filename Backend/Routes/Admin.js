const router=require('express').Router()
let admin = require('../models/Admin.Schema');

router.route('/').get((req,res)=>{
admin.find().then(admins=>res.json(admins)).catch(err=>res.status(400).json('Error:'+err))
})

router.route('/Adminadd').post((req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const newAdmin=new admin({
        username,password
    })
    newAdmin.save().then(()=>res.json("Admin Added")
    ).catch(err=>res.status(400).json('Error:'+err))
    })
router.get('/Admin/get',(req,res)=>{
        
})

module.exports=router