import { useEffect, useState } from 'react'
import axios from 'axios'
function ProductApi() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
     const getProducts = async() =>{
        let response = await axios.get('http://localhost:5000/api/product/all')
        setProducts(response.data.products)
     }
     getProducts();
    },[])
  return{
    products: [products,setProducts]
  }
}

export default ProductApi