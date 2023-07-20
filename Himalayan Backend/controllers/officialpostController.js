const {officialPost} = require('../models/officialpostSchema')
const {Official} = require('../models/officialSchema')

const addOfficialNews= async (req,res)=>{
    console.log("Official new init")
    try{
        console.log(req.body)
        let officialpost =new officialPost(req.body);
        const official=await Official.findById(officialpost.author)
        if(!official){
            return res.status(200).json({message:officialpost})
        }
        official.posts.push(officialpost);
        officialpost.wardNumber=official.wardNumber;
        await official.save();
        await officialpost.save()
        return res.status(200).json(officialpost);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getOfficialPosts=async(req,res)=>{
    try{
        const officialPosts = await officialPost.find()
        res.status(200).json(officialPosts)
    }catch(error){
        res.status(400).send(error.message)
    }
}

exports.addOfficialNews = addOfficialNews
exports.getOfficialPosts = getOfficialPosts