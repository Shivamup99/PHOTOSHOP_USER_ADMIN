import mongoose from "mongoose";

const productModal = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true,
        trim:true 
    },
    content:{
        type:String,
        required:true 
    },
    images:{
        type:Object,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false 
    },
    sold:{
        type:Number,
        default:0
    }
},{timestamps:true})

const productSchema = mongoose.model('Products',productModal)
export default productSchema