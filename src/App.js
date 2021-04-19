import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Component/Nav";
import Shop from "./Component/Shop";
import About from "./Component/About";
import Home from "./Component/Home";
import Item from "./Component/Item";

function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id" component={Item}/>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
