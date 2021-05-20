import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import {Button } from 'react-bootstrap';

function Saludo () {
    return (
        <div>
            <h1 className="saludo">¡Gracias por tu compra!</h1>
            <Link to={'/'} >
            <Button>
                    Volver a comprar
                </Button>
            </Link>    
        </div>
        
    );
};
export default Saludo;
