const bcrypt = require('bcrypt')
const Joi = require('joi')
const {User} = require('../models/userSchema')

const getUsers = async (req,res)=>{
    try {
        const user = await User.find().sort('firstName');
        res.send(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const getUser = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).send('The user with the given ID was not found')

        res.send()
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const registerUser = async (req,res)=>{
    try {
        const {error}  = validateUser(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        let user = new User(req.body)
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt)
        user.password = hashPassowrd

        user = await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).json({message:error.message})
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

    }
}

function validateLogin(user){
    const schema = Joi({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
}

function validateUser(user){
    const schema = Joi.object({
        firstName:Joi.string().min(3).max(50).required(),
        middleName:Joi.string().optional(),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.string().required(),
        citizenshipNumber: Joi.string().required(),
        DOB: Joi.string().required(),
        wardNumber: Joi.string().required(),
<<<<<<< HEAD
        gender: Joi.string().required(),   
        posts: Joi.optional()     
=======
        gender: Joi.string().required(),
        posts: Joi.optional()
>>>>>>> origin/aryanBackend
    })
    return schema.validate(user)
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.registerUser = registerUser
exports.loginUser = loginUser
