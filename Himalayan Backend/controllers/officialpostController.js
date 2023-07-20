const {officialPost} = require('../models/officialpostSchema')
const {Official} = require('../models/officialSchema')
const mongoose=require('mongoose');
const { Post } = require('../models/postSchema');


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

const editOfficialPost=async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.id)) return res.status(404).send('The ID is invalid')
        const post = await Post.findById(req.body.postId)
        if(!post) return res.status(404).send('Post not found')


    }catch(error){
        res.status(400).send(error.message)
    }
}
const editOfficialPostPerm=async(req,res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.id)) return res.status(404).send('The ID is invalid')
        const {author,postId} = req.body
        
        const post = await Post.findById(postId)
        if(!post) return res.status(404).send('Invalid Post ID')
        
        if(post.author === author) return res.status(200).json({success:true})
        
        res.status(200).json({success:false})

    }catch(error){
        res.status(400).send(error.message)
    }
}

exports.addOfficialNews = addOfficialNews
exports.getOfficialPosts = getOfficialPosts
exports.editOfficialPostPerm = editOfficialPostPerm
exports.editOfficialPost = editOfficialPost