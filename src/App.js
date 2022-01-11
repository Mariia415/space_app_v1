import { Component} from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsAction } from "./actions/getNewsAction";
import { loginAction } from "./actions/loginAction";
import { gettingData } from "./helpers/gettingData";

import Nav from "./pages/nav/nav";
import Login from "./pages/login/login";
import HomeWithSearch  from "./pages/home/homeWithSearch";
import GalleryWithSearch  from "./pages/gallery/galleryWithSearch";
import About from "./pages/about/about";


class App extends Component {
  
  componentDidMount() {
    this.props.getNewsAction();
    this.props.loginAction(sessionStorage.getItem('login'));
    
  }
  
  render() {
    
    const news = gettingData(this.props.news, "explanation");
    const dates = gettingData(this.props.news, "date");
    const titles = gettingData(this.props.news, "title");
    const imgs = gettingData(this.props.news, "url");
    const loggedIn = this.props.login;
    console.log(loggedIn);
       
    
    return (
      <BrowserRouter>
        
            <Switch>
              <Route exact path="/">
               {loggedIn ? <Redirect to="/home"/> : <Login doLogin={loginAction}/>}               
              </Route>

              <Route path="/home">
               <div className="main">
                 <div className="nav">
                   <Nav />
                 </div>
                 <div className="article">
                   <HomeWithSearch text={news} int={dates}/>
                 </div> 
               </div> 
              </Route>

              <Route path="/gallery">
               <div className="main">
                 <div className="nav">
                   <Nav />
                 </div>
                 <div className="article">
                   <GalleryWithSearch text={titles} int={imgs}/>
                 </div> 
                </div> 
              </Route>

              <Route path="/about">
                <div className="main">
                 <div className="nav">
                   <Nav />
                 </div>
                 <div className="article">
                   <About text={news} int={dates}/>
                 </div> 
                </div> 
              </Route>
            </Switch>        
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
