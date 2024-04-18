const express = require("express")

const {getAllProducts, getASingleProduct, createANewProduct, updateCurrentProduct, deleteProduct} = require('../controllers/productController')


const router = express.Router()
router.get('/products', getAllProducts)

router.get('/products/:id', getASingleProduct)

router.post('/products', createANewProduct)

router.put('/products/:id', updateCurrentProduct)

router.delete('/products/:id', deleteProduct)


module.exports = router