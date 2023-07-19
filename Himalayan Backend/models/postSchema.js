const mongoose=require('mongoose');
const postSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    //author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    //comments:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}],
    numComments:Number,
    upVotes:Number,
    downVote:Number
},{timestamps:true})
const Post=mongoose.model('Post',postSchema);
module.exports=Post;