import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const nav = useNavigate()

    const handleLogin = (role)=>{
        localStorage.setItem("user",role)
        if (role=="admin") {
            nav("/admin")
        }
        if (role=="staff") {
            nav("/staff")
        }
        if (role=="user") {
            nav("/user")
        }
    }
  return (
    <div>
        <h1>login page</h1>

        <button onClick={()=>handleLogin("admin")}>Admin Page</button>
        <button onClick={()=>handleLogin("user")}>User Page</button>
        <button onClick={()=>handleLogin("staff")}>Staff Page</button>


    </div>
  )
}

export default Login