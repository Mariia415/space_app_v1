import React, { useState } from "react";
import { GalleryCard } from "./galleryCard";
import { GalleryTheme } from "./galleryTheme";

const Gallery = ({ url, title }) => {
  const showCollection = (urls, titles) => {
    if (url) {
      return urls.map((url, idx) => (
        <GalleryCard url={url} title={titles[idx]} key={idx} />
      ));
    }

    return <div>Wait...</div>;
  };
  const [theme, setTheme] = useState(`gallery`);
  const changeTheme = (e) => (val, act) => {
    act(val.slice(0, 7) + " " + e.target.value);
    return val;
  };

  return (
    <div className={theme}>
      <h1>Gallery</h1>

      <GalleryTheme themeMethod={changeTheme} theme={theme} change={setTheme} />
      <div className="gallery-collection">{showCollection(url, title)}</div>
    </div>
  );
};

export default Gallery;
