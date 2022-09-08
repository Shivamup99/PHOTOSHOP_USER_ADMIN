import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './auth.scss'

const Login = () => {
  const [user,setUser] = useState({email:'',password:''})

  const onChange = (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
  }

  const loginSubmit =async(e)=>{
      e.preventDefault()
      try {
        await axios.post('http://localhost:5000/api/user/login',user)
        localStorage.setItem('user',true)
        window.location.href='/'
      } catch (error) {
        alert(error.message)
      }
  }
  return (
   <div className='login'>
    <img src='/images/login.jpg' alt='dd'/>
    <form className="login-box" onSubmit={loginSubmit}>
      <h1>Login Form</h1>
      <div className="login-content">
      <div className="input-email">

      <input type="email" placeholder='username' name='email' required value={user.email} onChange={onChange}/>
      </div>
      <div className="input-password">
       
      <input type="password" placeholder='password'  name='password' required value={user.password} onChange={onChange}/>
      </div>
      </div>
      <div className="auth-btn">
      <button>Let me in</button>

      <Link to='/register' className='reg'>
       don't have account ? Register
        </Link>
      </div>
    </form>
  
  </div>

  )
}

export default Login