import { Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsAction } from "./actions/getNewsAction";
import { loginAction } from "./actions/loginAction";
import selectgData from "./helpers/selectData";

import Nav from "./pages/nav/nav";
import Login from "./pages/login/login";
import About from "./pages/about/about";
import HomeWithSearch from "./pages/home/homeWithSearch";
import GalleryWithSearch from "./pages/gallery/galleryWithSearch";

class App extends Component {
  
  componentDidMount() {
    this.props.getNewsAction();
    this.props.loginAction(sessionStorage.getItem('login'));
  }
  
  render() {
    
    const news = selectgData(this.props.news, "explanation");
    const dates = selectgData(this.props.news, "date");
    const titles = selectgData(this.props.news, "title");
    const imgs = selectgData(this.props.news, "url");
    
    if(!this.props.login) {
      return (
        <Login doLogin = {loginAction}/>
      )
    }
    return (
      <BrowserRouter>
        <div className="main">
          <div className="nav">
            <Nav />
          </div>
          <div className="article">
            <Switch>
              <Route exact path="/">
                <HomeWithSearch text={news} int={dates}/>
              </Route>
              <Route path="/about">
                <About />
                
              </Route>
              <Route path="/gallery">
                <GalleryWithSearch text={titles} int={imgs
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
  loginAction: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  login: state.login.login,
});

export default connect(mapStateToProps, { getNewsAction, loginAction })(App);
