import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({ match }) => {
    const [product, setproduct] = useState({})
    useEffect(() => {
        const fetchProduct =  async () => {
            const id =  match.params.id
            const { data } = await axios.get(`/api/products/${id}`)
            setproduct(data)
        }
        fetchProduct()
    }, [])
    return (
        <div>
            <Link to='/' className='btn btn-light'>Back Home</Link>
            <div className='container'>
                <div className='row px-5 py-3'>
                    <div className='col-6'>
                        <img className='fluid w-100'  src={product.image} alt=""/>
                    </div>
                    <div className ='col-3'>
                        <h4 className ='productName'>{product.name}</h4>
                        <hr/>
                        <Rating rating ={product.rating} review = {product.numReviews}/>
                        <hr/>
                        Price: $ {product.price}
                        <hr/>
                        <p><span style={{fontWeight: 'bold'}}>Description:</span> <br/>{product.description}</p>
                    </div>
                </div>
                <div className='row'>

                </div>

            </div>
        </div>
    )
}

export default ProductScreen
