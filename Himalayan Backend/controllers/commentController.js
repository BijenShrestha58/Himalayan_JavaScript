const Joi = require('joi')
const {Comment} = require('../models/commentSchema')
const {Post}=require("../models/postSchema");

const getComment = async(req,res)=>{
   // console.log('Fetching Comment..')
    try{
        const comment = await Comment.find({postId: req.params.id})
        if(!comment){ return res.status(404).send('The Post with the given ID was not found')}
        res.status(200).json(comment)
        

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const createComment =async (req,res)=>{
    try{
        let comment = new Comment(req.body)
        comment = await comment.save()
        await Post.findById(comment.postId).then(user=>{
            user.comments.push(comment.postId);
            return user.save();
        }).catch(err=>{ res.status(500).json({message:err.message});})
        res.send(comment)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


exports.createComment = createComment
exports.getComment = getComment