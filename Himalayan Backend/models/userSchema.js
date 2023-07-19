const mongoose=require('mongoose');
const Joi = require('joi')

const User= mongoose.model('User',new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    middleName:String,
    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address.']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
    phoneNumber:{
        type:String,
        required:true,
        trim:true
    },
    citizenshipNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true
    },
    wardNumber:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },

}))

function validateUser(user){
    const schema = Joi.object({
        firstName:Joi.string().min(3).max(50).required(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.email().min(3).required(),
        password: Joi.min(6).required(),
        phoneNumber: Joi.string().required(),
        citizenshipNumber: Joi.string().required(),
        DOB: Joi.date().required(),
        wardNumber: Joi.string().required(),
        gender: Joi.string().required()
    })
}

exports.User = User;
exports.validate = validateUser;