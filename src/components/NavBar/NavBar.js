import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import logo from "../ComponentsImages/logo.png"
import { CartContext } from '../../context/CartContext/CartContext'
import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Nav} from 'react-bootstrap';
import "../NavBar/NavBar.css"


function NavBar () {
  const [] = useContext(CartContext)
    return (


      <div className='App tc f3'>
      <Navbar className="color-nav" expand='lg'>
      <Link to="/"><img src={logo} alt="logo bajo cero" className="logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
          <Link className = "link" to="/" style={{ textDecoration: 'none' }} >Tienda</Link>
            <Link className="link" to="/productos" style={{ textDecoration: 'none' }}>Categorías</Link>    
          </Nav>
          <Link to="/cart"></Link>
            <Link to="/cart"><CartWidget /></Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ); 
}

export default NavBar

     

        /*<nav> 
            <div className="logo"> 
           <Link to="/"><img src={logo} alt="logo bajo cero" className="logo" /> </Link>
       </div>
          <ul>
            <Link to="/"><li>Tienda</li></Link>
              <Link to="/productos"><li>CATEGORIAS</li></Link>          
            <Link to="/cart"><li> </li></Link>
            <Link to="/cart"><li> <CartWidget /></li></Link>
          </ul>
        </nav>
    )
}*/


