const mongoose=require('mongoose');

const Post= mongoose.model('Post',new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    upVotes:Number
},{timestamps:true}))
exports.post = Post;