import React, { useContext } from 'react'
import {CartContext} from "../../context/CartContext/CartContext"
import {Button } from 'react-bootstrap';



const RemoveItem = (articulo) => {
    const [articulos, setArticulos] = useContext(CartContext)
    const filtrarItems = articulos.filter((art) => {
        return art !== articulo.articulo
    })
    const eliminar = () => {
        setArticulos(filtrarItems)

    }
    return (
        <div>
             <Button  onClick={eliminar}>
            Remover </Button>
           
        </div>
    )
}

export default RemoveItem