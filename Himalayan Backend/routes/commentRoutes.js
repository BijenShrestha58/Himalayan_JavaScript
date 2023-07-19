const express=require("express");
const router=express.Router();
const {Comment}=require("../models/commentSchema");
const {createComment} = require("../controllers/commentController")

//router.get('/',getPosts)

//router.get('/:id',getPost)

router.post('/create',createComment)

module.exports=router