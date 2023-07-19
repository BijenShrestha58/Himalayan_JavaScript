const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:String,
    middleName:String,
    lastName:String,
    email:{
        type:String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.']
    },
    password:String,
    phoneNumber:Number,
    citizenshipNumber:Number,
    dob:Date,
    wardNumber:Number,
    gender:{type:String,enum:["Male","Female","Other"]},

})

module.exports=mongoose.model("User",playerSchema);