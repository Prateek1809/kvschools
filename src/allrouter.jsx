import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './home'
import Announcements from './pages/announcements'


const allrouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/announcements' element={<Announcements/>}/>
        <Route path='/announcements' element={<Announcements/>}/>
    </Routes>
    </>
  )
}

export default allrouter