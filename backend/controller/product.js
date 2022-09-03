import Products from '../modal/product.js'


class ApiActions{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString
    }
    filtering(){
        const queryObj = {...this.queryString}
        const excludedFields = ['page','sort','limit']
        excludedFields.forEach(el=>delete(queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|lte|gt|lt|regex)\b/g,match=>'$'+match)
        this.query.find(JSON.parse(queryStr))
        return this;
    }
    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        } else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 4
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl ={
    getProducts : async(req,res)=>{
        try {
            const fetaure = new ApiActions(Products.find(),req.query).filtering().sorting().paginating();
            const product = await fetaure.query
            res.status(200).json({result:product.length,products:product})    
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getProduct: async(req,res)=>{
        try {
            const product = await Products.findById({_id:req.params.id})
            res.status(200).json(product)    
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    createProduct: async(req,res)=>{
       try {
         const{title,price,desc,content,images,category} = req.body
         if(!images) return res.status(400).json({message:'No images upload'})
         const newProduct = new Products({
            title:title.toLowerCase(),price,desc,content,images,category
         })
         await newProduct.save()
         res.status(201).json({products:newProduct})
       } catch (error) {
        res.status(500).json({message:error.message})
       }
    },
    deleteProduct: async(req,res)=>{
        try {
        const product = await Products.findByIdAndDelete({_id:req.params.id})
        if(product){
            res.status(200).json({message:"Deleted Success"})
        } else{
            res.status(400).json({message:"Product not found"})
        } 
        } catch (error) {
           res.status(500).json({message:error.message}) 
        }
    },
    updateProduct: async(req,res)=>{
        try {
            const{title,price,desc,content,images,category} = req.body
            if(!images) return res.status(400).json({message:'No images upload'})
            const product = await Products.findByIdAndUpdate({_id:req.params.id},{title:title.toLowerCase(),price,desc,content,images,category},{new:true})
            await product.save()
            res.status(200).json({product}) 
        } catch (error) {
            res.status(500).json({message:error.message}) 
        }
    }
}

export default productCtrl;