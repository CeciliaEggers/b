import ItemListContainer from "./containers/ItemListContainer/ItemListContainer"
import Header from './components/header/header'
import Home from './components/Home/Home'
import Cart from "./components/Cart/Cart"
import {CartProvider} from "./context/CartContext/CartContext"
import Productos from './components/Productos/Productos'
import {ProductsProvider} from "./context/ProductContext/ProductContext"
import {ItemDetailContainer} from "./containers/ItemDetailContainer/ItemDetailContainer"
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import CheckOutContainer from "./containers/CheckOutContainer/CheckOutContainer"
import gracias from "./components/gracias"
import './App.css';


function App() {
  return (
    <Router>
      <ProductsProvider>
      <CartProvider>

        
    <div className="App">
      <Header/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/productos/:id" exact component={ItemListContainer} />
         <Route path="/productos" exact component={Productos}/>
         <Route path="/productos/:id/:id" component={ItemDetailContainer} />
         <Route path="/cart" component={Cart} />
         <Route path="/gracias" component={gracias} />
         <Route path="/checkout" component={CheckOutContainer} />
  
  
       </Switch>
    </div>

    </CartProvider>
    </ProductsProvider>
    <Footer />
    </Router>
  );
}

export default App;