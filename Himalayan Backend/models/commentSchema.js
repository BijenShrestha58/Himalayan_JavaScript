const mongoose=require('mongoose');

const Comment= mongoose.model('Comment',new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    upVotes:Number
},{timestamps:true}))
exports.comment = Comment;