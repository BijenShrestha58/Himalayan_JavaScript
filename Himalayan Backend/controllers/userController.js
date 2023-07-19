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
const addUser = async (req,res)=>{
    try {
        const {error}  = validateUser(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        let user = new User(req.body)

        user = await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// const login = async (req,res)=>{
//     try{

//     }catch(error){

//     }
// }

function validateUser(user){
    const schema = Joi.object({
        firstName:Joi.string().min(3).max(50).required(),
        middleName:Joi.string().min(0),
        lastName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.string().required(),
        citizenshipNumber: Joi.string().required(),
        DOB: Joi.string().required(),
        wardNumber: Joi.string().required(),
        gender: Joi.string().required()
    })
    return schema.validate(user)
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.addUser = addUser
