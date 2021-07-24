import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getNewsAction } from "../../actions/getNewsAction";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     news: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ news: data }));
  // }
  componentWillMount() {
    this.props.getNewsAction();
  }

  render() {
    const news = this.props.news.map((newsPeace, idx) => (
      <div key={idx}>
        <h3>{newsPeace.title}</h3>
        <p>{newsPeace.date}</p>
        <p>{newsPeace.explanation}</p>
      </div>
    ));
    return (
      <div>
        <h1>Home</h1>
        {news}
      </div>
    );
  }
}

Home.propTypes = {
  getNewsAction: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  news: state.news.news,
});

export default connect(mapStateToProps, { getNewsAction })(Home);
