const express = require("express");
const router = express.Router();

//Para traer los Controllers
const { 
    getProducts, 
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

console.log(products);

router.route("/")
    .get(getProducts)
    .post(addProduct);

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)
    
module.exports = router;