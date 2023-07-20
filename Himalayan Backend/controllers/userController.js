const nodemailer=require('nodemailer')
require('dotenv').config();
const bcrypt = require('bcrypt')
const Joi = require('joi')
const {User} = require('../models/userSchema');
const mongoose  = require('mongoose');

const getUsers = async (req,res)=>{
    try {
        const user = await User.find()
        res.send(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const getUser = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).send('The user with the given ID was not found')

        res.send(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const registerUser = async (req,res)=>{
    console.log('registering...')
    try {
        // const {error}  = validateUser(req.body)
        // if(error) {return res.status(400).send(error.details[0].message)}

        let user = new User(req.body)
        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password,salt)
        user.password = hashPassword

        user = await user.save()
        if(!user){return res.status(400).send("error user")}
        else{
            sendOTPVerificationEmail(req.body.email,user._id)
            res.status(200).send(user)
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const sendOTPVerificationEmail=async(email,user_id)=>{
    try{
        //const otp=`${Math.floor(1000+Math.random()*9000)}`
        /*const transporter=nodemailer.createTransport({
            service:"gmail",
            port:465,
            secure:true,
            logger:true,
            debug:true,
            secureConnection:false,
            auth:{
                user:'aryanliviTest@gmail.com',
                pass:'rtpdrvigdevyswyi'
            },
            tls:{
                rejectUnauthorized:true
            }
        });
        */
        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:'aryanliviTest@gmail.com',
                pass:'rtpdrvigdevyswyi'
            }
        });
        const mailOptions={
            from:'aryanliviTest@gmail.com',
            to:email,
            subject:'For Verification Mail',
            html:`<a href="http://127.0.0.1:3000/api/users/verify?id=${user_id}">Click here to verify your account</a>`
        }
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){console.log(err);}
            else{
                console.log("asddds::"+info.response)}
        });
        
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
const verifyMail=async(req,res)=>{
    console.log("verifying")
try{
    const updateInfo =await User.updateOne({_id:req.query.id},{$set:{verified:true}});
    console.log(updateInfo);
    res.send("Email_Verified")
}
catch(error){
    console.log(error.message)
}
}
const loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body
        const {error} = validateLogin(req.body)
        if(error) return res.status(401).send(error.details[0].message)
        
        const user =await User.findOne({email: email})
        if(!user) return res.status(401).send('Invalid Credentials')
        
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(401).send('Invalid Credentials')
        console.log('Login Successful')
        res.status(200).json({
            success: true,
            message: "Logedin Successfully",
            userId: user._id,
            firstName: user.firstName,
            middleName:user.middleName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            citizenshipNumber: user.citizenshipNumber,
            DOB:user.DOB,
            wardNumber: user.wardNumber,
            gender: user.gender                        
        })  
        
    }catch(error){
        res.status(401).send(error.message)
    }
}

function validateLogin(user){
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(user)
}

// function validateUser(user){
//     const schema = Joi.object({
//         firstName:Joi.string().min(3).max(50).required(),
//         middleName:Joi.string().min(0).optional(),
//         lastName: Joi.string().min(3).max(50).required(),
//         email: Joi.string().min(3).required(),
//         password: Joi.string().min(6).required(),
//         phoneNumber: Joi.string().required(),
//         citizenshipNumber: Joi.string().required(),
//         DOB: Joi.string().required(),
//         wardNumber: Joi.string().required(),
//         gender: Joi.string().required(),   
//         posts: Joi.optional(),
//         postVotedId:Joi.optional()
//     })
//     return schema.validate(user)
// }

exports.getUsers = getUsers
exports.getUser = getUser
exports.registerUser = registerUser
exports.loginUser = loginUser
exports.verifyMail=verifyMail

