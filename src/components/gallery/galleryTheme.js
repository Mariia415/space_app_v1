export const GalleryTheme = ({ themeMethod, theme, change }) => {
  return (
    <div>
      {/* <span>Choose the color</span> */}
      <select onChange={(e) => themeMethod(e)(theme, change)}>
        <option>Choose theme</option> */}
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="peru">Peru</option>
      </select>
    </div>
  );
};
