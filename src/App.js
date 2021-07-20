import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./features/nav/nav";
import Home from "./features/home/home";
import Gallery from "./features/gallery/gallery";
import About from "./features/about/about";
import store from "./store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX"
    )
      .then((result) => result.json())
      .then((response) =>
        store.dispatch({
          type: "Liuda",
          payload: {
            date: response.date,
            title: response.title,
          },
        })
      );
    console.log("Hmmmm");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
