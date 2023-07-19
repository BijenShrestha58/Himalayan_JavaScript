const mongoose=require('mongoose');

const commentSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    upVotes:Number
},{timestamps:true})
const Comment=mongoose.model("Comment",commentSchema)
module.exports=Comment