import React, { useContext } from 'react'
import ProductItem from '../components/product/ProductItem'
import { Context } from '../config/context'
import './style/products.scss'
import Loader from './utils/Loader'
const Products = () => {
  const state = useContext(Context)
  const [products] = state.productsApi.products
  return (
    <>
    <div className='products'>
      {products && products.map((product)=>(
        <ProductItem key={product._id} product={product}/>
      ))}
    </div>
    {products.length===0 && <Loader/>}
    </>
  )
}

export default Products