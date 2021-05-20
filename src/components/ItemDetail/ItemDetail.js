import React, {useState}  from 'react'
import Counter from '../ItemCount/ItemCount.js'
import "../ItemDetail/ItemDetail.css"
import {Link} from 'react-router-dom'
import { BotonAdd } from '../BotonAdd/BotonAdd'


function ItemDetail ({propiedad}) {
    const producto = propiedad   
    const [cantidad, setCantidad] = useState(0)
    const [verCounter, setVerCounter] = useState("visible")

    const habilitarAgregar = cantidad >= 1 ? "active" : "disabled"

    return (
    
            <div className="detail">
          
                <div className="flex-detail" bg='secondary' text='white' style={{minHeight:'550px'}}>
                   <div className="title-img-detail">                                         
                   <img src={propiedad.URL} alt="imagen producto" className="img-detail" /> 
                    </div>
                    <div className='description-name-button-detail'>    
                        <h4 className='h3-size margin-bottom'>{propiedad.Tittle}</h4>
                        <p className="text-start"> {propiedad.Descripción}</p>
                        <p className="price-detail">${propiedad.Precio}</p>
                        <p className="text-start margin-bottom">{propiedad.stock} en stock</p>

                        <div className={verCounter}> 
                  <Counter setear={setCantidad} producto={producto} verCounter={verCounter}/>
                  <BotonAdd verCounter={verCounter} setVerCounter={setVerCounter} producto={producto} count={cantidad} visibilidad={habilitarAgregar} />
                  </div>
    
                  <Link to={{pathname:"/cart", state:[{producto:producto}, {cantidad:cantidad}]}}>
                <button  className="carrito">Finalizar Compra</button></Link>
                </div> 

                </div>
            </div>
        )
}

export default ItemDetail