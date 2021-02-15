// const express = require ('express')
// const dotenv = require ('dotenv')
// const products = require ('./data/products')

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js' // the name without the extension '.js' will not work

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => res.send('API is running'))

app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server running on ${PORT}`))

