import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import { useState } from 'react'
import CartPage from './components/CartPage'

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  
  return (
    <>
     <Header cart={cart} />
     <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/cart' element={<CartPage  />}/>
     </Routes>

    </>
  )
}

export default App
