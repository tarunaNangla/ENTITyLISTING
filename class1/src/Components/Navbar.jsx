import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flexd'>
       <Link to="/">Home</Link>

       <div className='flexdd'>
       
       <Link to="/about">About</Link>
       <Link to="/cart">Cart</Link>

       </div>
    </div>
  )
}

export default Navbar
