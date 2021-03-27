import React,{useEffect} from "react";
import "./styles.css";
import Header from './components/Header'
import Products from './components/Products/Products';
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import SuccessPage from './components/SuccessPage'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartContextProvider from "./components/Context/CartContext";
import routes from "./components/Routes"

export default function App() {



  return (
    <div className='App'>
      <CartContextProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path={routes.default} exact component={Products} /> 
          <Route path={routes.cart} exact component={Cart}></Route> 
          <Route path={routes.checkout} exact component={Checkout}></Route> 
          <Route path={routes.success} exact component={SuccessPage}></Route> 

          {/* <Route path={routes.about_us} exact component={Cart}></Route>  */}

        </Switch>
            
      </Router>
  
      </CartContextProvider>
    </div>
    
    );
}
