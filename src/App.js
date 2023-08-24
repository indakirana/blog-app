import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home"
import { Details } from "./pages/details/Details"
import { Footer } from "./components/footer/Footer"

const App = () => {
  return <>
    <Router> 
      <Header />
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path='/details/:id' component={Details} />
        </Switch>
      <Footer />
    </Router>
  </>
}

export default App;
