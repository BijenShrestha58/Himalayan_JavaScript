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

const updateupVotes= async (req,res)=>{
    try{
        const {userId,postId}=req.body;
        const post=await Post.findById(postId);
        if(!post){
            return res.status(404).send('The post with the given ID was not found')
        }
        if(post.upVotedBy.includes(userId)){
            return res.status(400).json({message:"upVoteId already exists."});
        }
        post.upVotedBy.push(userId);
        post.upVotes+=1;
        await post.save();
        return res.status(200).json({message:"done"});
        
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updatedownVotes= async (req,res)=>{
    try{
        const {userId,postId}=req.body;
        const post=await Post.findById(postId);
        if(!post){
            return res.status(404).send('The post with the given ID was not found')
        }
        if(post.downVotedBy.includes(userId)){
            return res.status(400).json({message:"upVoteId already exists."});
        }
        post.downVotedBy.push(userId);
        post.downVotes+=1;
        await post.save();
        return res.status(200).json({message:"done"});
        
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getPosts = async (req,res)=>{
    //console.log('here')
    try{
        const post =await Post.find()
        //console.log(post)
        res.send(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.createPost = createPost
exports.getPosts = getPosts
exports.updateupVotes=updateupVotes
exports.updatedownVotes=updatedownVotes