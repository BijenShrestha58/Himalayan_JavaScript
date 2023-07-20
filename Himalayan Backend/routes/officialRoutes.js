const express=require("express");
const router=express.Router();
const {getOfficials,getOfficial,addOfficial,sendToMayor} = require('../controllers/officialController')


//Get
router.get('/',getOfficials)

//post 
router.get('/:id',getOfficial);

//patch
router.post('/create',addOfficial);


//expired (call during every login)
router.post('/expired',sendToMayor)


module.exports=router;