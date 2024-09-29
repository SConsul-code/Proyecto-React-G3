/* import React from "react"; */
import SelectedImage1 from "../../../Images/image-product-1.jpg";
import MiniSelectImage1 from "../../../Images/image-product-1-thumbnail.jpg";
/* import SelectedImage2 from "../Images/image-product-2.jpg"; */
import MiniSelectImage2 from "../../../Images/image-product-2-thumbnail.jpg";
/* import SelectedImage3 from "../Images/image-product-3.jpg"; */
import MiniSelectImage3 from "../../../Images/image-product-3-thumbnail.jpg";
/* import SelectedImage4 from "../Images/image-product-4.jpg"; */
import MiniSelectImage4 from "../../../Images/image-product-4-thumbnail.jpg";

const LeftContainer = () => {
  return (
    <div className="left-container">
      <img className="selected-image" src={SelectedImage1} alt="" />
      <div className="mini-images">
        <img className="item" src={MiniSelectImage1} alt="" />
        <img className="item" src={MiniSelectImage2} alt="" />
        <img className="item" src={MiniSelectImage3} alt="" />
        <img className="item" src={MiniSelectImage4} alt="" />
      </div>
      {/*         Imagenes en tamaño grande de las mini que se van a usar mas adelante
        <img src={SelectedImage2} alt="" />
        <img src={SelectedImage3} alt="" />
        <img src={SelectedImage4} alt="" /> */}
    </div>
  );
};

export default LeftContainer;
