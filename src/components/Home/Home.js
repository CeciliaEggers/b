import React from 'react';
import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer"

const Home =()=> {

    return (
        <div>
                    <h2> ¡Bienvenidos a Bajo Cero! </h2>
                    <p> Somos distribuidores de frutas y verduras congeladas </p>
                
        <div>
            <ItemListContainer categoria="todo"/>
        </div>
        </div>
    );
}

export default Home;








