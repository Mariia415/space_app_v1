// import React from "react";
import { useState } from "react";
import GalleryTheme from "./galeryTheme";
const Gallery = ({ titles, imgs }) => {
  const gallery = titles.map((title, idx) => {
    return (
      <div key={idx} className="gallery-card">
        <img src={imgs[idx]} alt="wait.." className="gallery-img" />
        <p className="gallery-title">{title}</p>
      </div>
    );
  });

  const [theme, setTheme] = useState("gallery");
  const changeTheme = (e) => (changeColor) => {
    changeColor(e.target.value);
  };

  return (
    <div className={theme}>
      <div className="gallery-header">
        <h1 className="gallery-h1">Gallery</h1>
        <GalleryTheme
          themeMethod={changeTheme}
          changeColor={setTheme}
          theme={theme}
        />
      </div>

      {gallery}
    </div>
  );
};

export default Gallery;
