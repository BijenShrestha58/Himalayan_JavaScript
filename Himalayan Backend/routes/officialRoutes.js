const express=require("express");
const router=express.Router();
const {getOfficials,getOfficial,addOfficial,sendToMayor} = require('../controllers/officialController')


// [/api/official/] Get all the details of officials
router.get('/',getOfficials)

// [/api/official/:id] Get the info of a particular official
router.get('/:id',getOfficial);

// [/api/official/create] Create a new official
router.post('/create',addOfficial);


// Check for issue expiry (Called during every login)
router.post('/expired',sendToMayor)



module.exports=router;