export const GalleryCard = ({ url, title }) => {
  return (
    <div className="gallery-card">
      {/* <a href="#" title={title}> */}
      <img className="gallery-img" src={url} alt="Wait" />
      {/* </a> */}
      <p className="gallery-title">{title}</p>
    </div>
  );
};
