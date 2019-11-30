import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import "./App.css";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
         <>
         <Header />
         <Route exact path="/beers" component={AllBeers} />
         </>
        </Switch>
        
      </div>
    );
  }
}

export default App;
