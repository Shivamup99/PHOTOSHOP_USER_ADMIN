import mongoose from "mongoose";

const userModal = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:Number,
        default:0
    },
    cart:{
        type:Array,
        default:[]
    }
},{timestamps:true})

const userSchema = mongoose.model('Users',userModal)
export default userSchema;