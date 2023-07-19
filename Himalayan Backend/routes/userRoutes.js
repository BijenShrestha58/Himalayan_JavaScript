const express=require("express");
const router=express.Router();
const {User}=require("../models/userSchema");
const Official=require("../models/officialSchema");

//Get
router.get('/',)

//post 
router.get('/create',async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});

//patch
router.get('/:id',async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});


//delete
router.get('/:id',async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})



module.exports=router;