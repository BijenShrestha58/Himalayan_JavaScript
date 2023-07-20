const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {createPost,getPosts} = require("../controllers/postController")

router.get('/',getPosts)

//router.get('/:id',getPost)

router.post('/create',createPost)

//router.post("/overdue",sendHigher)

module.exports=router