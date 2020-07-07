const express = require("express");
const router = express.Router();

//Para traer los Controllers
const { getProducts, addProduct} = require('../controllers/products');

console.log(products);

router.route("/")
    .get(getProducts)
    .post(addProduct);
    
module.exports = router;