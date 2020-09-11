const { Router } = require("express");

const router =require('express').Router()

const user=require('../models/user.model')

router.get('/',(req,res)=>{
    user.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
})
router.post('/add',(req,res)=>{
    const name=req.body.name
    const email=req.body.email
    const Refid=req.body.refid
    const queue=Number(req.body.queue);
    const newuser=new user({name,email,Refid,queue})
    newuser.save().then(user=>res.json(user))
})
router.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
      user.email = req.body.email;
      user.refid = req.body.refid;
      user.queue = Number(req.body.queue);
      user.save()
        .then(() => res.json('user updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
})
router.delete('/:id',()=>{
    user.findByIdAndDelete(req.params.id)
    .then(user=>console.log("user is deleted"))
    .catch(err=>console.log(err))
})

module.exports=router;