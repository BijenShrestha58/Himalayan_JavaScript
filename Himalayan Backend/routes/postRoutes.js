const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {createPost,getPosts,getWardPosts, getPostById} = require("../controllers/postController")

// [/api/post] get all the existing posts
router.get('/',getPosts)

// [/api/post/ward/:wardNumber] get all the posts of a particular ward

router.get('/:id',getPostById)
//router.get('/:id',getPost)
router.get('/ward/:wardNumber',getWardPosts)

// [/api/post/create] Create a post
router.post('/create',createPost)

//router.post("/overdue",sendHigher)

module.exports=router