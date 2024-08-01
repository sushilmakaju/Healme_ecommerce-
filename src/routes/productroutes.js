const {Addproduct, updateProduct, getAllProduct, getProductById} = require('../controller/productController')
const express = require('express');
const router = express.Router();

router.post('/product', Addproduct);
router.patch('/updateproduct/:id', updateProduct);
router.get('/getProduct', getAllProduct)
router.get('/getProductById/:id', getProductById)


module.exports = router;