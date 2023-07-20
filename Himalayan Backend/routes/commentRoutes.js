const express=require("express");
const router=express.Router();
const {Comment}=require("../models/commentSchema");
const {createComment,getComment} = require("../controllers/commentController")

router.get('/',(req,res)=>{console.log("work")})

router.post('/create',createComment)

router.get('/:id',getComment)

module.exports=router