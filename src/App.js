import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Gallery from "./components/gallery";
import About from "./components/about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewsPage = this.handleNewsPage.bind(this);
    // this.handlGalleryPage = this.handleGalleryPage.bind(this);
    this.state = {};
  }

  // gettingNews = async (e) => {
  //   e.preventDefault();
  //   const api_key = "FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX";

  //   const today = new Date();
  //   let newsNumber = 6;
  //   const previousDay = ((d) => new Date(d.setDate(d.getDate() - newsNumber)))(
  //     new Date()
  //   );
  //   const date = today.toJSON().slice(0, 10);
  //   const previousDate = previousDay.toJSON().slice(0, 10);

  //   let daysCollection = [];
  //   let infoCollection = [];

  //   const api_url =
  //     await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${previousDate}&end_date=${date}
  //   `);

  //   const data = await api_url.json();

  //   for (let value of data) {
  //     daysCollection.push(value.date);
  //     infoCollection.push(value.explanation);
  //   }

  //   this.setState({
  //     date: daysCollection.reverse(),
  //     info: infoCollection,
  //   });
  //   console.log(this.state.date);
  // };

  handleNewsPage(path) {
    fetch(path)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          news: result.map((res) => <div>{res.explanation}</div>),
          gallery: result.map((res) => <img src={res.url} alt="Wait" />),
        })
      );
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
              <Home handleNews={this.handleNewsPage} news={this.state.news} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery
                handleGallery={this.handleNewsPage}
                gallery={this.state.gallery}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
