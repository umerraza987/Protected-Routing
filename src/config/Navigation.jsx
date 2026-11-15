import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import ProtectedRouting from '../components/ProtectedRouting'
import Adminpage from '../pages/Adminpage'
import Staffpage from '../pages/Staffpage'
import Unauthorized from '../pages/Unauthorized'

const Navigation = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}></Route>

            <Route element={
                <ProtectedRouting allowedRole={["admin"]}></ProtectedRouting>
            }>
                <Route path='/admin' element={<Adminpage/>} ></Route>

            </Route>
            <Route element={
                <ProtectedRouting allowedRole={["staff"]}></ProtectedRouting>
            }>
                <Route path='/staff' element={<Staffpage/>} ></Route>
                <Route path='/staff/checkin' element={<Staffpage/>} ></Route>

            </Route>
            <Route path='*' element={<Unauthorized/>}></Route>
        </Routes>
    </div>
  )
}

export default Navigation