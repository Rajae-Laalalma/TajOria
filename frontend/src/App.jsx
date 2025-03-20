import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Orders from './pages/Orders'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Collection' element={<Collection/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:ProductId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Place-Order' element={<PlaceOrder/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        
        
      </Routes>
    </div>
  )
}

export default App
