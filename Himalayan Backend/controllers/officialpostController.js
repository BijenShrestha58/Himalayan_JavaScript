const {officialPost} = require('../models/officialpostSchema')
const {Official} = require('../models/officialSchema')
const mongoose=require('mongoose');
const { Post } = require('../models/postSchema');


const addOfficialNews= async (req,res)=>{
    console.log("New Official Attempt")
    try{
        console.log(req.body)
        let officialpost =new officialPost(req.body);
        const official=await Official.findById(officialpost.author)
        if(!official){
            return res.status(404).json({message:'Official not found'})
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
        const {postId,content} = req.body
        const post = await Post.findByIdAndUpdate(postId,{content:content},{new:true})
        if(!post) return res.status(404).send('Post not found')
        res.send(post)
        
    }catch(error){
        res.status(400).send(error.message)
    }
}
const editOfficialPostPerm=async(req,res)=>{
    try{
        
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