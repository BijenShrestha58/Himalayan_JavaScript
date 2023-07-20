const Joi = require('joi')
const {Post} = require('../models/postSchema')
const {User} = require('../models/userSchema')

const createPost =async (req,res)=>{
    try{
        let post = new Post(req.body)        
        const user=await User.findById(post.author);
        if(!user){return res.status(400).json({message:"User with the current ID does not exist"});}
        user.posts.push(post);
        post.wardNumber=user.wardNumber;
        await user.save();
        post =await post.save()
        res.status(200).json(post)
    console.log('Post Created')
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
const getWardPosts = async(req,res)=>{
    try{
        console.log(req.params.wardNumber)
        const post = await Post.find({wardNumber:req.params.wardNumber})
        console.log(post)
        if(!post) return res.status(404).send("No posts found")
        res.send(post)
    }catch(error){
        res.status(500).send("Error while getting ward posts",error)
    }
}

exports.createPost = createPost
exports.getPosts = getPosts
exports.updateupVotes=updateupVotes
exports.updatedownVotes=updatedownVotes
exports.getWardPosts = getWardPosts