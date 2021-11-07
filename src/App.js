import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsAction } from "./actions/getNewsAction";

import Nav from "./features/nav/nav";
import Home from "./features/home/home";
import Gallery from "./features/gallery/gallery";
import About from "./features/about/about";
import myFirstHoc from "./features/hocs/hoc";

const WithSearchHome = myFirstHoc(Home);
const WithSearchGallery = myFirstHoc(Gallery);

class App extends Component {
  componentDidMount() {
    this.props.getNewsAction();
  }

  render() {
    const gettingData = (arr, exactData) => {
      if (Array.isArray(arr)) {
        return arr.map((item, idx) => ({info: item[exactData], id: idx}));
      }
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
                <WithSearchHome text={news} int={dates}/>
              </Route>
              <Route path="/about">
                <About />
                
              </Route>
              <Route path="/gallery">
                <WithSearchGallery text={titles} int={imgs
                } />
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
