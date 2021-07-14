import React from "react";

const Gallery = (props) => {
  const showCollection = (arr) => {
    return arr.map((url, idx) => {
      return <img src={url} alt="Wait" key={idx} />;
    });
  };

  console.log(props.url);
  return (
    <div>
      <h1>Gallery</h1>
      <div>{showCollection(props.url)}</div>
    </div>
  );
};

export default Gallery;
