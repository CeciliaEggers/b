import React from 'react'
import {Link} from 'react-router-dom'
import './Productos.css'

const Productos = () => {
    return (

      <div>
         <h2 className="title">Envíos sin costo a domicilio superando la compra de $2000</h2>
        <div className="cat-container">
     
           
         <Link to={{pathname:"/productos/todo", state:{categoria: "todo"}}}>
            <div className="cat">
                <img alt="imagen"src= "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/06145550/FrutasyVerduras.jpg" ></img>
                <h4>Ver todo</h4>
            </div>
          </Link>
          <Link to={{pathname:"/productos/verdura", state:{categoria: "verdura"}}}>
            <div className="cat">
                <img alt="imagenVerdura" src="https://farm9.staticflickr.com/8459/8049186415_679c90977d.jpg"></img>
                <h4>Verduras</h4>
            </div>
          </Link>
          <Link to={{pathname:"/productos/fruta", state:{categoria: "fruta"}}}>
            <div className="cat">
                <img alt="imagenFruta" src="https://images.theconversation.com/files/284093/original/file-20190715-173355-xg2bmi.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"></img>
                <h4>Frutas</h4>
            </div>
          </Link>
        </div>
        </div>
    )
}

export default Productos