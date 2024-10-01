import { useState } from "react";
import SelectedImage1 from "../Images/image-product-1.jpg";
import MiniSelectImage2 from "../Images/image-product-2-thumbnail.jpg";
import MiniSelectImage3 from "../Images/image-product-3-thumbnail.jpg"; // Asegúrate de importar todas las imágenes necesarias

const ImageSwitcher = () => {
  const [selectedImage, setSelectedImage] = useState(SelectedImage1);

  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div>
      <img src={selectedImage} alt="Imagen principal" />
      <div>
        <img
          src={MiniSelectImage2}
          alt="imagen chica 2"
          onClick={() => handleThumbnailClick(MiniSelectImage2)}
        />
        <img
          src={MiniSelectImage3}
          alt="imagen chica 3"
          onClick={() => handleThumbnailClick(MiniSelectImage3)}
        />
      </div>
    </div>
  );
};

export default ImageSwitcher;
