import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext/CartContext"
import RemoveItem from '../../components/RemoveItem/RemoveItem'

import './Cart.css'


const Cart = () => {
   const [articulos, setArticulos]= useContext(CartContext)

   const total = articulos.reduce((currentTotal, articulo) =>{
     return (articulo.cantidad * articulo.producto.Precio) + currentTotal}, 0)
   const cantidadItems = articulos.reduce((currentTotal, articulo) =>{
     return articulo.cantidad + currentTotal}, 0)  
       
    return (
        <div className="detalle">
          <h3>Tu carrito de compras</h3>

         {articulos.map((articulo)=> {
             const subtotal = articulo.cantidad * articulo.producto.Precio
             return(
              <div key={articulo.producto.id} className="itemCart">
           
               
                <ul className="itemDescription">
     
                <li> <img className="img.carrito" src={articulo.producto.URL} alt="imagen producto" /></li>
                <li>Producto: {articulo.producto.Tittle}</li>
                  <li>Precio por unidad: $ {articulo.producto.Precio}</li>
                  <li>Cantidad: {articulo.cantidad}</li>
                  <li>Subtotal: $ {subtotal}</li>
                  <RemoveItem articulo={articulo}/>
                </ul>
   
                
              </div>  
                
           
             )
         })}
          <h4>{articulos.length > 0 ? `Cantidad de Productos: ${cantidadItems}` : null}</h4>
          <h4>{articulos.length === 0 ? "No hay productos" : `Total de compra: $${total}`} </h4>
          <Link to="/"><button className="bt-productos">Ir a Productos</button></Link> : 
          <Link to="/checkout/"><button className="bt-comprar">Comprar</button></Link>

        </div>
    )
}

export default Cart