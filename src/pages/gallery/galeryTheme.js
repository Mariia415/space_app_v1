const GalleryTheme = ({ themeMethod, changeColor }) => {
  return (
    <select
      className="gallery-select"
      onChange={(e) => themeMethod(e)(changeColor)}
    >
      <option>Choose gallery theme</option>
      <option value="light">Light (default theme)</option>
      <option value="dark">Dark</option>
      <option value="peru">Peru</option>
    </select>
  );
};

export default GalleryTheme;
