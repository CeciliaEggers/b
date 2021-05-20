
import React from 'react'
import { Link } from 'react-router-dom';
import "../../containers/ItemListContainer/ItemListContainer.css"


 function Item({producto}) {    
    return (


        
        <div className="itemLista">
           
             <Link to={{pathname:`/productos/${producto.categoryId}/${producto.id}`, state:{producto:producto}}}> 
                                <img src={producto.URL}className="img rotate-hor-center"  alt= "imagen"/>
                                <h5 className='title-item'>{producto.Tittle}</h5>
                                <p className="price-item">${producto.Precio}</p>
                            </Link>
          </div>   
      
    )
}


export default Item