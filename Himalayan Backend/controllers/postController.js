const Joi = require('joi')
const {Post} = require('../models/postSchema')

const createPost =async (req,res)=>{
    try{
        let post = new Post(req.body)
        post = await post.save()
        res.send(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.createPost = createPost