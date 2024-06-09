const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    email:{
        type:String,
        required:true,
        minLength:6,
        maxLength:50
    },
    phone:{
        type:String,
        required:true,
        minLength:10,
        maxLength:11
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:100
    },
    verifyCode:{
        type:String,
        maxLength:6,
        default:0
    },
    resetPasswordCode:{
        type:String,
        maxLength:6,
        default:0
    },
    token:{
        type:String,
        default:null
    },
    isVerify:{
        type:Boolean,
        default:false
    }
});
const User = mongoose.model("User",userSchema);
module.exports = {User};