import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from "../ComponentsImages/logo.png"
import { CartContext } from '../../context/CartContext/CartContext'
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


function NavBar () {
  const [] = useContext(CartContext)
    return (
        <nav> 
            <div className="logo"> 
           <Link to="/"><img src={logo} alt="logo bajo cero" className="logo" /> </Link>
       </div>
          <ul>
            <Link to="/"><li>HOME</li></Link>
              <Link to="/productos"><li>CATEGORIAS</li></Link>          
            <Link to="/cart"><li> </li></Link>
            <Link to="/cart"><li> <CartWidget /></li></Link>
          </ul>
        </nav>
    )
}

export default NavBar