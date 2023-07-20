const express=require("express");
const router=express.Router();
const {User}=require("../models/userSchema");
const {getOfficials,getOfficial,addOfficial} = require('../controllers/userController')
const {Official}=require("../models/officialSchema");

//Get
router.get('/',getOfficials)

//post 
router.get('/:id',getOfficial);

//patch
router.post('/create',addOfficial);


// //delete
// router.get('/:id',async (req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })



module.exports=router;