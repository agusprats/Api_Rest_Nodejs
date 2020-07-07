const { products } = require('../db.json');

module.exports = {
    getProducts: (req, res) => {
    res.json({products})
},
    addProduct: (req, res) => {
        const { name } = req.body;
        products.push({
            name,
            id: products.length
        });
        res.json({
            'success': true,
            'msg': 'successfully added'
        });
    }
};