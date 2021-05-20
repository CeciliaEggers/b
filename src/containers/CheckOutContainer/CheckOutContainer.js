
import React, { useState,useContext,useEffect } from 'react';
import { CartContext } from "../../context/CartContext/CartContext"
import firebase from 'firebase/app';
import { getFirestore } from "../../firebase"
import { Link } from 'react-router-dom';
import './input.css'
import { Form, Button } from 'react-bootstrap';

export default function CheckOutContainer() {
  const [cartItems] = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");
  const [conEmail, setConEmail] = useState("");

  
  useEffect(() => {
    cartItems &&
      cartItems.map((item) =>
        setTotal((prevTotal) => prevTotal + item.price * item.qty)
      );
  }, [cartItems]);

  const addOrder = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const buyer = { name, email,conEmail};
    const items = cartItems;
    
    const newOrder = {
      buyer,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total:total,
    };

    orders.add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
      })
      .catch((error) => {
        // setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

   const onNameChange =(evento) => {
    setName(evento.target.value)
  }
  const onEmailChange =(evento)=>{
    setEmail(evento.target.value)
  }
  const confonEmailChange =(evento)=>{
    setConEmail(evento.target.value)
  }
  return (
    <div> 
    <h2 className="contacto">Confirmación de compra</h2>
    <h6> Hacé tu pedido online y te contactamos a la brevedad</h6>
  
          
    <p className='margin-top'>¡Completá tus datos!</p>   

    <Form.Group className= "input">
                <Form.Control type="text" name="name" value={name} onChange={onNameChange} placeholder="Nombre y Apellido"  />
                <br />
                
                <Form.Control  type="email" name="email" value={email} onChange={onEmailChange} placeholder="mail@ejemplo.com"/>
                <br />
                <Form.Control type="email" name="conEmail" value={conEmail} onChange={confonEmailChange} placeholder="mail@ejemplo.com"/>
                <Link to={'/gracias/'}>
                <Button variant="primary" type="submit" onClick={addOrder}>
                    Confirmar orden
                </Button>
                </Link>
            </Form.Group>

    </div>
    
  );
}