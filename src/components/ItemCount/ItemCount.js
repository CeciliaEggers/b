import React, {useState} from 'react'
import { Button } from "react-bootstrap";
import './ItemCount.css'





const ItemCount = ({setear, producto}) => {
  const [itemCount, setCount] = useState(0)

  const handleDecrement  = () => {
    const verificaritemCount = itemCount >= 1 ? (setCount(itemCount - 1), setear(itemCount-1)) : null
  } 
   const handleIncrement = () => {
     const verificarStock = itemCount < producto.stock ? (setCount(itemCount + 1), setear(itemCount+1)) : null
  }
    
  return (
    <div className= "button">
      <p>{itemCount}</p>
        <div>
        <Button className= "bt" variant="primary" onClick={handleDecrement}>
          -
        </Button>
        <Button variant="primary"onClick={handleIncrement}>
          +
        </Button>
        
       
        </div>
      </div>
  )
}

export default ItemCount