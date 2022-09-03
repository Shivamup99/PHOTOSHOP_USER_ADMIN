import mongoose from "mongoose";

const categoryModal = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{timestamps:true})

const categorySchema = mongoose.model('Category',categoryModal)

export default categorySchema