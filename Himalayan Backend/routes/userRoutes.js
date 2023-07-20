const express=require("express");
const router=express.Router();
const {getUsers,getUser,registerUser,loginUser, verifyMail} = require('../controllers/userController')
//const {Official}=require("../models/officialSchema");

// Get a list of all user objects
router.get('/',getUsers)
router.get('/verify',verifyMail)

// Register user
router.post('/register',registerUser)



// Login with credentials
router.post('/login',loginUser)

// Get a user object from userID 
router.get('/:id',getUser)





// //delete
// router.get('/:id',async (req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })



module.exports=router;