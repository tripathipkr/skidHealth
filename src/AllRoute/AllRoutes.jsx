import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../Componant/AboutUs'
import ContactUs from '../Componant/ContactUs'
import DashBoard from '../Componant/DashBoard'
import Home from '../Componant/Home'
import Details from '../Componant/Details'
import Edit from '../Componant/Edit'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/dashBoard' element={<DashBoard/>} />
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/update' element={<Edit/>} />
    </Routes>
  )
}

export default AllRoutes