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
        return arr.map((item) => item[exactData]);
      }
    };

    const news = gettingData(this.props.news, "explanation");
    const dates = gettingData(this.props.news, "date");
    const titles = gettingData(this.props.news, "title");
    const imgs = gettingData(this.props.news, "url");
    

    console.log(`This is news`, news);

    return (
      <BrowserRouter>
        <div className="main">
          <div className="nav">
            <Nav />
          </div>
          <div className="article">
            <Switch>
              <Route exact path="/">
                {/* <Home news={news} dates={dates} /> */}
                <WithSearchHome text={news} int={dates}/>
              </Route>
              <Route path="/about">
                <About />
                
              </Route>
              <Route path="/gallery">
                {/* <Gallery titles={titles} imgs={imgs} /> */}
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
// export default App;
