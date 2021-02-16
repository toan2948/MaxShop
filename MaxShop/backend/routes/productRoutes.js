import express from 'express' // to use 'router'
import Product from '../models/productModel.js' 
import asyncHandler from 'express-async-handler'

const productRouter = express.Router()


// desc: fetch all products
// route: GET /api/products
// access: public
productRouter.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// desc: fetch a product with the id
// route: GET /api/products/:id
// access: public
productRouter.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else
    {
        res.status(404).json({ message: 'no found'})
    }
}))


export default productRouter
