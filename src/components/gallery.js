import React from "react";

const Gallery = (props) => {
  console.log(props.url);
  return (
    <div>
      <h1>Gallery</h1>
      <img src={props.url} alt="Wait" />
    </div>
  );
};

export default Gallery;
