const express=require("express");
const router=express.Router();
const {Comment}=require("../models/commentSchema");
const {createComment,getComment} = require("../controllers/commentController")

//router.get('/',getPosts)

router.get('/:id',getComment)

router.post('/create',createComment)

module.exports=router