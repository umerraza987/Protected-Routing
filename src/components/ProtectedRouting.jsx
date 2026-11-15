import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Login from '../pages/Login'
import Unauthorized from '../pages/Unauthorized'

const ProtectedRouting = (allowedRole) => {
    const location = useLocation()
    const user = localStorage.getItem("user")

    if (!user) {
        return <Login/>
    }
    if (!allowedRole.includes(user)) {
        return <Unauthorized/>
    }
    return <Outlet/>
}

export default ProtectedRouting