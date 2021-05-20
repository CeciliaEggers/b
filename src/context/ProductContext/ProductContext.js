import React, {createContext, useEffect, useState} from 'react'
import { getFirestore } from "../../firebase"

export const ProductsContext = createContext()

export const ProductsProvider = (props) => {
    const db = getFirestore();
  
    const [productos, setProductos] = useState([])
    const getProductos = async () => {
        db.collection('items').onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id : doc.id})
            })
            setProductos(docs)
        })
    }
    useEffect(() => {
        getProductos()
    })

    return (
        <ProductsContext.Provider value={productos}> {props.children} </ProductsContext.Provider>
    )
}