import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './auth.scss'

const Register = () => {
  const [user,setUser] = useState({name:'',email:'',password:''})

  const onChange = (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
  }

  const registerSubmit =async(e)=>{
      e.preventDefault()
      try {
        await axios.post('http://localhost:5000/api/user/register',user)
        localStorage.setItem('user',true)
        window.location.href='/'
      } catch (error) {
        alert(error.message)
      }
  }
  return (
   <div className='login'>
    <img src='/images/login.jpg' alt='dd'/>
    <form className="login-box" onSubmit={registerSubmit}>
      <h1>Register Form</h1>
      <div className="login-content">
      <div className="input-name">

      <input type="text" placeholder='your name' name='name' required value={user.name} onChange={onChange}/>
     </div>
      <div className="input-email">

      <input type="email" placeholder='username' name='email' required value={user.email} onChange={onChange}/>
      </div>
      <div className="input-password">
       
      <input type="password" placeholder='password'  name='password' required value={user.password} onChange={onChange}/>
      </div>
      </div>
      <div className="auth-btn">
      <button>Let me in</button>

      <Link to='/login' className='reg'>
       have a account ? Sign in
        </Link>
      </div>
    </form>
  
  </div>

  )
}

export default Register