import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/App.css";
import Header from "./Header";
import Home from "./Home"
// import Checkout from "./Checkout"
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Paok Checkout</h1>
            {/* <Checkout /> */}
          </Route>
          <Route path="/login">
            {/* <Login /> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;