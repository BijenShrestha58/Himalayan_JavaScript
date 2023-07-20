const mongoose=require('mongoose');
const officialpostSchema= new mongoose.Schema({
    content:{type:String,required:true,trim:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"Official"},
    wardNumber:{type:String,required:true,trim:true},
},{timestamps:true})
const officialPost=mongoose.model('officialPost',officialpostSchema);

exports.officialPost=officialPost;