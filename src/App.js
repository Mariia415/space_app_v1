import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Gallery from "./components/gallery";
import About from "./components/about";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
