const ProductModel = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    } catch (error) {
        
    }
}

module.exports = {
    getProducts
}