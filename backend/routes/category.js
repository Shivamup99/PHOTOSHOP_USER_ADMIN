import express from 'express'
import categoryCtrl from '../controller/category.js'
import authAdmin from '../middleware/admin.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/product/category',categoryCtrl.getCategories)
router.post('/product/category',auth,authAdmin,categoryCtrl.createCategory)
router.delete('/product/category/:id',auth,authAdmin,categoryCtrl.deleteCategory)
router.put('/product/category/:id',auth,authAdmin,categoryCtrl.updateCategory)
export default router;