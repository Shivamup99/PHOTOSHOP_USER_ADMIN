import express from 'express'
import productCtrl from '../controller/product.js'
import authAdmin from '../middleware/admin.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/product/all',productCtrl.getProducts)
router.get('/product/:id',productCtrl.getProduct)
router.post('/product/products',productCtrl.createProduct)
router.put('/product/:id',productCtrl.updateProduct)
router.delete('/product/:id',productCtrl.deleteProduct)

export default router;