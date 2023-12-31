const mongoose=require('mongoose');

const commentSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"Post"},
    upVotes:Number,
    downVotes:Number
},{timestamps:true})
const Comment=mongoose.model("Comment",commentSchema)
exports.Comment=Comment