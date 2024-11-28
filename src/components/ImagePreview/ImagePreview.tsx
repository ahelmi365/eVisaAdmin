import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ImagePreviewProps {
  imageUrl: string; // URL or base64 of the image
  altText: string;
  title?: string;
  calassNames?: string;
}

const ImagePreview = ({
  imageUrl,
  altText,
  title,
  calassNames,
}: ImagePreviewProps) => {
  return (
    <div >
      <Zoom>
        <img
        
          src={imageUrl}
          alt={altText}
          className={calassNames}
          style={{
            width: "100%",
            maxWidth: "300px", // Adjust thumbnail size
            cursor: "zoom-in",
            height:"170px"
          }}
        />
      </Zoom>
      {title && <h6 className="mb-0 mt-2 text-center">{title}</h6>}
    </div>
  );
};

export default ImagePreview;

// import React from "react";

// interface ImageViewerProps {
//   imageUrl: string; // URL or path to the image
//   altText: string;
//   title?: string;
//   calassNames?: string;
// }

// const ImagePreview: React.FC<ImageViewerProps> = ({ imageUrl }) => {
//   return (
//     <div style={{ textAlign: "center", marginBottom: "20px" }}>
//       <h5>Image Preview</h5>
//       <iframe
//         src={imageUrl}
//         style={{
//           width: "100%",
//           height: "500px",
//           border: "none", // Removes iframe border for a clean look
//         }}
//         title="Image Preview"
//       />
//     </div>
//   );
// };

// export default ImagePreview;
