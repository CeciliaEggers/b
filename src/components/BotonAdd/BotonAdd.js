import React, {useContext, useState}from 'react'
import './Add.css'
import {CartContext} from "../../context/CartContext/CartContext"


export const BotonAdd = ({verCounter, setVerCounter, producto, count, visibilidad}) => {
    const [articulos, setArticulos] = useContext(CartContext)
    const [error, setError] = useState("")
    const pasarData = () => {
        articulos.some((articulo)=> {
          return articulo.producto.id === producto.id}) === false ? noEncontro() : setError("Este item ya se agregó")}
      
    const noEncontro = () => {
            setVerCounter("oculto")
            setArticulos(prevArticulos => [...prevArticulos, {producto: producto, cantidad: count}])
    }
    return (
        <div className="boton-agregarcarrito">

            
        <button className={` agregar-carrito ${visibilidad} ${verCounter}`}  onClick={pasarData}>Agregar al Carrito</button> 
        
        <p>{error}</p>
        </div>
    )
}
