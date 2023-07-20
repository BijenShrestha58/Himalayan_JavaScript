const express=require("express");
const router=express.Router();
const {updateupVotes,updatedownVotes}=require('../controllers/postController')


router.post('/upVote',updateupVotes)

router.post('/downVote',updatedownVotes)
module.exports=router