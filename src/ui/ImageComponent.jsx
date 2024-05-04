function ImageComponent({ src, alt, height, width }) {
  return <img src={src} alt={alt} style={{ height: height, width: width }} />;
}
export default ImageComponent;
