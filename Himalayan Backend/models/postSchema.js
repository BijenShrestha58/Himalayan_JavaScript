const mongoose=require('mongoose');
const postSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}],
    wardNumber:{type:String,required:true,trim:true},
    numComments:Number,
    upVotes:Number,
    upVotedBy:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    downVotedBy:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    downVotes:Number,
    tags:{
        types:String,
        enum:["Transportation","Health","Traffic","Energy","Economy","Politics","Education","Real Eatate","Office","Other"],
    }
},{timestamps:true})
const Post=mongoose.model('Post',postSchema);

exports.Post=Post;