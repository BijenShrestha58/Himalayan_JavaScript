const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {createPost,getPosts,getWardPosts, getPostById} = require("../controllers/postController")

// [/api/post] get all the existing posts
router.get('/',getPosts)

<<<<<<< HEAD
// [/api/post/ward/:wardNumber] get all the posts of a particular ward
=======
//get post by id
router.get('/:id',getPostById)
//router.get('/:id',getPost)
>>>>>>> efff67deabda517d7bc69ce5a04544d3f9768c9b
router.get('/ward/:wardNumber',getWardPosts)

// [/api/post/create] Create a post
router.post('/create',createPost)

//router.post("/overdue",sendHigher)

module.exports=router