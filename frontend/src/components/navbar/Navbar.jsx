import React, { useContext } from 'react'
import './nav.scss'
import {Login, ShoppingCartOutlined} from '@mui/icons-material'
import { Avatar, Badge } from '@mui/material'
import { NavLink,useLocation } from 'react-router-dom'
import {Context} from '../../config/context'
const Navbar = () => {
  const location = useLocation()
  if(location.pathname==='/login' || location.pathname==='/register'){
    return null
  }
  const auth = false
 // const value = useContext(Context)
  return (
    <div className='nav'>
      <div className="nav-content">
      <div className="nav-left">
        <span><NavLink to='/'> Home</NavLink></span>
        <span><NavLink to='/products'>Products</NavLink></span>
        <span><NavLink to='/about'>About</NavLink></span>
        <span><NavLink to='/contact'>Contact</NavLink></span>
      </div>
      <div className="nav-center">
        <h1>PHOTO SHOP</h1>
      </div>
      <div className="nav-right">
        <div>
          {auth ?(
             <NavLink to='/profile' className='auth'>
             <Avatar/>
             </NavLink>
          ):(
          <NavLink to='/login' className='auth'>
          <Login/>
          <span>Login </span>
          </NavLink>
          )}
        </div>
        <div>
        <NavLink to='/cart' className='cart'>
          <Badge badgeContent={3} color='success'> <ShoppingCartOutlined/> </Badge>
          <span>Cart</span>
          </NavLink>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar