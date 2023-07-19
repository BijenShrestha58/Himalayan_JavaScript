const express=require("express");
const router=express.Router();
const {User}=require("../models/userSchema");
const {getUsers,getUser,addUser} = require('../controllers/userController')
const Official=require("../models/officialSchema");

//Get
router.get('/',getUsers)

//post 
router.get('/:id',getUser);

//patch
router.post('/',addUser);


// //delete
// router.get('/:id',async (req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })



module.exports=router;