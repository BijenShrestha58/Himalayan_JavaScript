const Joi = require('joi')
const {Official} = require('../models/officialSchema')
const {Post} = require('../models/postSchema')

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
const addOfficial = async (req,res)=>{
    try {
        const {error}  = validateOfficial(req.body)
        if(error) return res.status(400).send(error.details[0].message)

        let official = new Official(req.body)

        official = await official.save()
        res.send(official)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const sendToMayor= async (req,res)=>{
    const{postId}=req.body;
    try {
        const post=await Post.findById(postId);
        if(!post){return res.status(400).send("Post not found!")}
        const currentTime = Date.now();
        const createdTime=post.createdAt.getTime();
        const timeElapsedInSeconds = Math.floor((currentTime - createdTime) / 1000);
        const timeElapsedInDays = Math.floor(timeElapsedInSeconds / 86400); 
        if(timeElapsedInDays>30){
            return res.status(200).json(post);
        }
        res.status(200).json({message:"Issue Has not Expired!"})
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
exports.addOfficial = addOfficial
exports.sendToMayor= sendToMayor
