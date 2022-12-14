import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const URL = process.env.MONGO_URL

const connection =()=>{
    try {
        mongoose.connect(URL)
        console.log('Database Connected')   
    } catch (error) {
        console.log(error)
    }
}

export default connection