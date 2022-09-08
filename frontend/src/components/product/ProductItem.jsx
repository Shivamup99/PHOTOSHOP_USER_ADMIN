import React from 'react'
import './product.scss'
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const ProductItem = ({product}) => {
  return (
    <div className='product-item'>
        <div className="product-card">
        <Link to={`/product/${product._id}`}>
        <img src={product?.images.url} alt={product?.title} />
        </Link>
        
        </div>
        <div className="product-box">
            <h2>{product?.title}</h2>
            <p>
                <CurrencyRupeeIcon/>
                {product?.price}
            </p>
            </div>
            <div className="desc">
            <span>{product?.desc}</span>
            </div>
        <div className="product-btn">
            <button className='buy'>Buy</button>
            <Link to={`/product/${product._id}`} className='view' >View</Link>
        </div>
    </div>
  )
}

export default ProductItem