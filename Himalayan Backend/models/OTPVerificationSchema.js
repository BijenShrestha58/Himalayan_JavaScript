const mongoose=require("mongoose");

const OTPVerificationSchema=new mongoose.Schema({
    userId:String,
    otp:String,
    createdAt:Date,
    expiresAt:Date,
});

const OTPVerification=mongoose.model("OTPVerification",OTPVerificationSchema);
exports.OTPVerification=OTPVerification;