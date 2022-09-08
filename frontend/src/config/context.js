import axios from "axios";
import { createContext, useEffect, useState } from "react";
import ProductApi from "../api/ProductApi";

export const Context = createContext()

export const ContextProvider = ({children}) =>{
    const [token,setToken] = useState(false)

    const refreshToken = async()=>{
       const refresh_token = await axios.get('http://localhost:5000/api/user/refresh_token')
       console.log(refresh_token.data.accesstoken)
    }
     
    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(user)
        refreshToken()
    },[])

    const state = {
        token:[token,setToken],
        productsApi : ProductApi()
    }
    return(
         <Context.Provider value={state}>{children}</Context.Provider>
    )
}