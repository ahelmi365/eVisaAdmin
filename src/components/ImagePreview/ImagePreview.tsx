import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ImagePreviewProps {
  imageSrc: string; // URL or base64 of the image
  altText: string;
  title?: string;
  calassNames?: string;
}

const ImagePreview = ({
  imageSrc,
  altText,
  title,
  calassNames,
}: ImagePreviewProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Zoom>
        <img
          src={imageSrc}
          alt={altText}
          className={calassNames}
          style={{
            width: "100%",
            maxWidth: "300px", // Adjust thumbnail size
            cursor: "zoom-in",
          }}
        />
      </Zoom>
      {title && <h6 className="mb-0 mt-2">{title}</h6>}
    </div>
  );
};

export default ImagePreview;
