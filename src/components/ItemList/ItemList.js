import Item from '../Item/Item'
import React, {useContext} from 'react'
import {ProductsContext} from "../../context/ProductContext/ProductContext"
import "../../containers/ItemListContainer/ItemListContainer.css"


const ItemList = (categoria) => {
    const listaProd = useContext(ProductsContext)  
    const productos = categoria.categoria === "todo" ? listaProd : listaProd.filter((prod) => {
        return prod.categoryId === categoria.categoria
    })

    return (
       
           <div className="item-card">
                {productos.map((producto) => {
                     return (
                   <Item producto={producto} key={producto.id}/>

                     )})}
            </div>
       
    )
}    
export default ItemList