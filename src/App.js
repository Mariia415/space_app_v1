import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { request_url } from "./sensitiveData";

import Nav from "./components/nav";
import Home from "./components/home/home";
import Gallery from "./components/gallery/gallery";
import About from "./components/about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.gettingData = this.gettingData.bind(this);
  }
  gettingData() {
    fetch(request_url)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          date: result.map((res) => res.date),
          title: result.map((res) => res.title),
          url: result.map((res) => res.url),
          info: result.map((res) => res.explanation),
        })
      );
  }

  componentDidMount() {
    this.gettingData();
  }

  render() {
    const gettingData = (arr, exactData) => {
      return arr.map((item) => item[exactData]);
    };

    const news = gettingData(this.props.news, "explanation");
    const dates = gettingData(this.props.news, "date");
    const titles = gettingData(this.props.news, "title");
    const imgs = gettingData(this.props.news, "url");

    return (
      <BrowserRouter>
        <div className="main">
          <div className="nav">
            <Nav />
          </div>
          <div className="article">
            <Switch>
              <Route exact path="/">
                <Home date={this.state.date} info={this.state.info} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/gallery">
                <Gallery url={this.state.url} title={this.state.title} />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
App.propTypes = {
  getNewsAction: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news.news,
});

export default connect(mapStateToProps, { getNewsAction })(App);
// export default App;
