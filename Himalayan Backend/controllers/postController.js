const Joi = require('joi')
const {Post} = require('../models/postSchema')
const {User} = require('../models/userSchema')

const createPost =async (req,res)=>{
    try{
        let post = new Post(req.body)
        post = await post.save()
        await User.findById(post.author).then(user=>{
            user.posts.push(post);
            return user.save();
        }).catch(err=>{ res.status(500).json({message:err.message});})
        res.send(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.createPost = createPost