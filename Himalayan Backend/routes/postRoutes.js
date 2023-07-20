const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {createPost,getPosts,getWardPosts, getPostById} = require("../controllers/postController")

router.get('/',getPosts)

//get post by id
router.get('/:id',getPostById)
//router.get('/:id',getPost)
router.get('/ward/:wardNumber',getWardPosts)

router.post('/create',createPost)

//router.post("/overdue",sendHigher)

module.exports=router