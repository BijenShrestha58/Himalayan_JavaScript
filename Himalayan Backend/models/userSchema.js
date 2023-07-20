const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:String,
    middleName:String,
    lastName:String,
    phoneNumber:Number,
    citizenshipNumber:Number,
    dob:Date,
    wardNumber:Number,
    gender:{type:String,enum:["Male","Female","Other"]},

})

module.exports=mongoose.model("players",playerSchema);