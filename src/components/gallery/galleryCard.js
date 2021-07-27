export const GalleryCard = ({ url, title }) => {
  return (
    <div className="gallery-card">
      <img className="gallery-img" src={url} alt="Wait" />
      <p className="gallery-title">{title}</p>
    </div>
  );
};
