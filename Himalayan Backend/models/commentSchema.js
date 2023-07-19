const mongoose=require('mongoose');

const commentSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"Post"},
<<<<<<< HEAD
    upVotes:Number
=======
    upVotes:Number,
    downVotes:Number
>>>>>>> 0b01b0f15b5d529ab8d9cddca8825d3cee2433c1
},{timestamps:true})
const Comment=mongoose.model("Comment",commentSchema)

exports.Comment=Comment