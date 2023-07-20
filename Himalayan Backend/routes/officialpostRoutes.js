const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {addOfficialNews,getOfficialPosts} = require("../controllers/officialpostController")

//add Official News
router.post('/news',addOfficialNews)

router.get('/all',getOfficialPosts)
module.exports=router