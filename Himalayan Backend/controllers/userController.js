const User = require('../models/userSchema')

const getUsers = async (req,res)=>{
    try {
        const user = await User.find();
        res.send(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    }