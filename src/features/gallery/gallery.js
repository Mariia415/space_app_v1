import React from "react";

const Gallery = ({ titles, imgs }) => {
  console.log(titles, imgs);
  const gallery = titles.map((title, idx) => {
    return (
      <div key={idx} className="gallery-card">
        <img src={imgs[idx]} alt="wait.." className="gallery-img" />
        <p className="gallery-title">{title}</p>
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
