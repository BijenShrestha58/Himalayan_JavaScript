const Joi = require('joi')
const {Official} = require('../models/officialSchema')
const {User} = require('../models/userSchema')
const {officialPost} = require('../models/officialPostSchema')
const bcrypt = require('bcrypt')



const getOfficials = async (req,res)=>{
    try {
        const official = await Official.find().sort('firstName');
        res.send(official)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const getOfficial = async (req,res)=>{
    try {
        const official = await Official.findById(req.params.id)
        if(!official) return res.status(404).send('The official with the given ID was not found')

        res.send()
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
const registerOfficial = async (req,res)=>{
    try {
        const {error}  = validateOfficial(req.body)
        if(error) return res.status(400).send(error.details[0].message)
           
        if(await User.findOne({email:req.body.email}))  return res.status(401).json({message:"Email already exists"})

        if(await User.findOne({citizenshipNumber:req.body.citizenshipNumber})) return res.status(401).json({message:"Citizenship already exists"})
        
        let official = new Official(req.body)
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(official.password,salt)
        official.password = hashPassword

        official = await official.save()
        res.send(official)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const loginOfficial = async (req,res)=>{
    try{
        const {email,password} = req.body
        const {error} = validateLogin(req.body)
        if(error) return res.status(401).send(error.details[0].message)
        
        const official =await Official.findOne({email: email})
        if(!official) return res.status(401).send('Invalid Credentials')
        
        const isMatch = await bcrypt.compare(password,official.password)
        if(!isMatch) return res.status(401).send('Invalid Credentials')
        console.log('Login Successful')
        res.status(200).json({
            success: true,
            message: "Logedin Successfully",
            officialId: official._id,
            firstName: official.firstName,
            middleName:official.middleName,
            lastName: official.lastName,
            email: official.email,
            phoneNumber: official.phoneNumber,
            citizenshipNumber: official.citizenshipNumber,
            DOB:official.DOB,
            wardNumber: official.wardNumber,
            position: official.position,
            gender: official.gender                        
        })  
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
function validateLogin(official){
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
    return schema.validate(official)
}

const sendToMayor= async (req,res)=>{
    //const{postId}=req.body;
    try {
        //const post=await Post.findById(postId);
        //if(!post){return res.status(400).send("Post not found!")}
        const post=await Post.find();
        const expiredPosts=[];
        post.forEach((ele)=>{
            const currentTime = Date.now();
            const createdTime=ele.createdAt.getTime();
            const timeElapsedInSeconds = Math.floor((currentTime - createdTime) / 1000);
            const timeElapsedInDays = Math.floor(timeElapsedInSeconds / 86400); 
            if(timeElapsedInDays>30){
                expiredPosts.push(ele);
            }
        })
        for(post in expiredPosts){
            res.status(200).json(post);
        }
        return res.status(200).json({message:"Issue Has not Expired!"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


function validateOfficial(official){
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
        gender: Joi.string().required(),   
        position: Joi.string().required(),
        posts: Joi.optional()     
    })
    return schema.validate(official)
}

exports.getOfficials = getOfficials
exports.getOfficial = getOfficial
exports.registerOfficial = registerOfficial
exports.sendToMayor= sendToMayor
exports.loginOfficial = loginOfficial