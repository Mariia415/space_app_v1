import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Gallery from "./components/gallery";
import About from "./components/about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.gettingData = this.gettingData.bind(this);
  }
  gettingData() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX&date=2017-07-08"
    )
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          date: result.date,
          title: result.title,
          url: result.url,
        })
      );
  }

  componentDidMount() {
    this.gettingData();
    console.log(this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home date={this.state.date} title={this.state.title} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery url={this.state.url} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
