import React from "react";

const Gallery = ({ titles, imgs }) => {
  console.log(titles, imgs);
  const gallery = titles.map((title, idx) => {
    return (
      <div key={idx}>
        <img src={imgs[idx]} alt="wait.." />
        <p>{title}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Gallery</h1>
      {gallery}
    </div>
  );
};

export default Gallery;
