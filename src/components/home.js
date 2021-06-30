import React from "react";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     api_key: "FssgzRxRGe1elBmwvuQYcqfZPBBSr4dX3HQryjFX",
  //     today: new Date().toJSON().slice(0, 10),
  //     previousDate: ((d) => new Date(d.setDate(d.getDate() - 6)))(new Date()),
  //     news: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
  //     .then((response) => response.json())
  //     .then((result) =>
  //       this.setState({
  //         news: result.map((res) => <div>{res.explanation}</div>),
  //       })
  //     );
  //   console.log(this.state.news);
  // }
  componentDidMount() {
    this.props.handleNews(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
    );
  }

  render() {
    return (
      <div>
        <div>{this.props.news ? this.props.news : "fail"}</div>
      </div>
    );
  }
}

export default Home;
