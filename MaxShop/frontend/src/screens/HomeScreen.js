import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
       const fetchProduct = async () => {
            const { data } = await axios.get('/api/products')
            setproducts(data)
       }
       fetchProduct()
    }, [])
    return (
        <>
            <h1 className='lastestProduct'>Latest products</h1>
            <div className='container'>
                <div className ='col-9 container px-5 '>
                    <div className='row'>  
                        {products.map(product =>  <div className='col-md-4 py-3' key ={product._id}>
                        <Product  product ={product}/></div>)}
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default HomeScreen
