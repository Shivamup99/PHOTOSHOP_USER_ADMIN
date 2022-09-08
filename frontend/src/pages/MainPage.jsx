import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Home'
import Login from './auth/Login'
import Notfound from './utils/Notfound'
import ProductrDetail from '../components/product/ProductrDetail'
import Register from './auth/Register'
const MainPage = () => {
  return (
    <div className='main-page'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/product/:id' element={<ProductrDetail/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
    </div>
  )
}

export default MainPage