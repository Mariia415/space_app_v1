import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsAction } from "./actions/getNewsAction";

import Nav from "./features/nav/nav";
import Home from "./features/home/home";
import Gallery from "./features/gallery/gallery";
import About from "./features/about/about";
// import { Provider } from "react-redux";
// import store from "./store";

class App extends React.Component {
  componentDidMount() {
    this.props.getNewsAction();
  }

  render() {
    // console.log("App rendered");
    // console.log(this.props.news);
    const news = this.props.news.map((item) => item.explanation);
    const dates = this.props.news.map((item) => item.date);
    const titles = this.props.news.map((item) => item.title);
    const imgs = this.props.news.map((item) => item.url);
    // console.log(news, dates, titles, imgs);

    return (
      <BrowserRouter>
        <div className="main">
          <div>
            <Nav />
          </div>
          <div>
            <Switch>
              <Route exact path="/">
                <Home news={news} dates={dates} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/gallery">
                <Gallery titles={titles} imgs={imgs} />
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
