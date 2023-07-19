const Joi = require('joi')
const {Comment} = require('../models/commentSchema')

const createComment =async (req,res)=>{
    try{
        let comment = new Comment(req.body)
        comment = await comment.save()
        res.send(comment)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.Comment = Comment
exports.createComment = createComment