const express=require("express");
const router=express.Router();
//const {Post}=require("../models/postSchema");
const {addOfficialNews,getOfficialPosts,editOfficialPost,editOfficialPostPerm} = require("../controllers/officialpostController")

// [/api/officialpost/news] Add Official News/ Announcement
router.post('/news',addOfficialNews)

// [/api/officialpost/all] Get all the Official News
router.get('/all',getOfficialPosts)

// [/api/officialpost/edit] Edit a particular News
router.put('/editPerm',editOfficialPostPerm)

module.exports=router