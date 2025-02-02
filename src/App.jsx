import React from 'react'
import "./App.scss"
import Header from './Components/Header/Header'

import Footer from './Components/Footer/Footer'
import CustomCursor from './Components/CustomCursor/CustomCursor'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Admin from './pages/admin'
const App = () => {
  return (
    <>
    
    <Header/>
    <CustomCursor/>
      <Routes>
      
    

      <Route path='/' element={<Home/>}/>
     <Route path='/admin' element={<Admin/>}/>
     
      </Routes>
      <Footer/>
    </>
  )
}

export default App