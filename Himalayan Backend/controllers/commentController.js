const Joi = require('joi')
const {Comment} = require('../models/commentSchema')
const {Post}=require("../models/postSchema");
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