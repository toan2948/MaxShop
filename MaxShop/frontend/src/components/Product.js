import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="card h-100 p-1">
            <Link to={`/products/${product._id}`}>
                <img src={product.image} className="card-img-top" />
            </Link>
            <Link to={`/products/${product._id}`}>
            <h5 className="card-title px-1 py-2 productName">{product.name}</h5>
            </Link>
            <div className="card-body">
            <div className="card-text"><Rating rating ={product.rating} review= {product.numReviews} /></div>
            <h3 className='py-2 productPrice'>{product.price}$</h3>
            </div>
        </div>
    )
}

export default Product
