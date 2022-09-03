import Category from '../modal/category.js'

const categoryCtrl ={
    getCategories:async(req,res)=>{
        try{
            const categories = await Category.find()
            res.status(200).json(categories)
        } catch(error){
            res.status(500).json({message:error.message})
        }
    },
    createCategory:async(req,res)=>{
        const {name} = req.body
        const checkCategory = await Category.findOne({name})
        if(checkCategory) return res.status(400).json({message:'category allready exist'})
        try {
            const category = new Category({
                name
            })
            await category.save()
            res.status(201).json({categories:category})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    deleteCategory:async(req,res)=>{
        try {
            const category = await Category.findByIdAndDelete(req.params.id)
            if(category){
                res.status(200).json({message:'Deleted Success'})
            } else{
                res.status(400).json({message:'Category not found'})
            }
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    updateCategory:async(req,res)=>{
        const {name} = req.body
        try {
            const category = await Category.findByIdAndUpdate({_id:req.params.id},{name},{new:true})
            res.status(201).json({category})
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }
}

export default categoryCtrl;