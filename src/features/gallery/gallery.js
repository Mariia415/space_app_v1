// import React from "react";
import GalleryTheme from "./galeryTheme";
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
      <div className="gallery-header">
        <h1 className="gallery-h1">Gallery</h1>
        <GalleryTheme />
      </div>

      {gallery}
    </div>
  );
};

export default Gallery;
