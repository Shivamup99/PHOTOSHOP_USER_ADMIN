import express from 'express'
import cloudinary from 'cloudinary'
import auth from '../middleware/auth.js'
import authAdmin from '../middleware/admin.js'
import fs from 'fs'
const router = express.Router();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

router.post('/image/upload',auth,authAdmin,(req,res)=>{
    try {
        if(!req.files || Object.keys(req.files).length===0)
        return res.status(400).json({message:'No files were upload'})
        
        const file = req.files.file
        if(file.size > 1024*1024){
            removeTemp(file.tempFilePath)
            return res.status(400).json({message:'Size to large'})
        } 
        
        if(file.mimetype !== 'image/jpeg' && file.mimetype !=='image/png'){
            removeTemp(file.tempFilePath)
        return res.status(400).json({message:'File formate incoreesct'})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath,{folder:'test'},async(err,result)=>{
            if(err) throw err;
            
            removeTemp(file.tempFilePath)
            res.json({public_id:result.public_id, url:result.secure_url})
        })

    } catch (error) {
      res.status(500).json({message:error.message})  
    }
})

// delete image in cloudinary

router.post('/image/destroy',auth,authAdmin,(req,res)=>{
    try {
        const{public_id} = req.body;
        if(!public_id) return res.status(400).json({message:'No images selected'})
        cloudinary.v2.uploader.destroy(public_id,async(err,result)=>{
            if(err) throw err;

            res.json({message:'Deleted Success'})
        })
    } catch (error) {
        res.status(500).json({message:error.message})  
    }
})

const removeTemp =(path)=>{
     fs.unlink(path,err=>{
        if(err) throw err
     })
}

export default router;