import Users from '../modal/user.js'

const authAdmin = async(req,res,next)=>{
    try {
        const user = await Users.findOne({
            _id: req.user.id
        })
        if(user.role===0)
          return res.status(400).json({message:'Admin resourse access denied'})
          next();
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export default authAdmin;