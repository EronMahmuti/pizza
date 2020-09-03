
import React,  { useState, useEffect } from 'react';
import Header from './components/header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Customize from './components/customize';
import Checkout from './components/checkout';
import Modal from './components/modal';

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    tomato: false,
    prosciutto: false,
})
//useeffect function 
        useEffect(() => {
          const data = localStorage.getItem("ingredients");
          if(data === true){ 
            setIngredients(JSON.parse(data)); 
          }
        },[])

        
  return (

    <div>
        <Header />
        <h1 className="titulli" >Porosit <span className="pizza" >PIZZA</span>për qefi</h1>
        <Router>
          <Switch>
            <Route exact path="/">
              <Customize
               ingredients={ingredients} setIngredients={setIngredients} />
            </Route>
            <Route path="/checkout">
              <Checkout ingredients={ingredients} />
            </Route>
            <Route path="/modal">
                  <Modal 
                    setIngredients={useState(false)}
                  />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
