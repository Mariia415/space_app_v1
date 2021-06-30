import React from "react";

class Gallery extends React.Component {
  componentDidMount() {
    this.props.handleGallery(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
    );
  }

  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <div>{this.props.gallery}</div>
      </div>
    );
  }
}

export default Gallery;
