const mongoose=require('mongoose');

const Post= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    comments:{type:mongoose.Schema.Types.ObjectId,ref:"Comment"},
    upVotes:Number
},{timestamps:true})
module.exports=Post;