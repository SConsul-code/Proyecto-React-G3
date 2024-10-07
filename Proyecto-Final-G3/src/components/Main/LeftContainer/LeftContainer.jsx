import React, { useState } from "react";
import "../LeftContainer/LeftContainer.css";
import image1 from "../../../Images/image-product-1.jpg";
import image2 from "../../../Images/image-product-2.jpg";
import image3 from "../../../Images/image-product-3.jpg";
import image4 from "../../../Images/image-product-4.jpg";

const LeftContainer = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const imagenes = [image1, image2, image3, image4];

  const manejarCambioImagen = (index) => {
    console.log("Imagen seleccionada:", index);
    setImagenSeleccionada(index);
  };

  const siguienteImagen = () => {
    setImagenSeleccionada((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setImagenSeleccionada((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="left-container">
      <div className="image-container">
        <button className="arrow left-arrow" onClick={anteriorImagen}>
          &#10094; 
        </button>
        <img
          src={imagenes[imagenSeleccionada]}
          alt={`Imagen ${imagenSeleccionada + 1}`}
          className="selected-image"
        />
        <button className="arrow right-arrow" onClick={siguienteImagen}>
          &#10095; 
        </button>
      </div>
      <div className="mini-images">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Miniatura ${index + 1}`}
            onClick={() => manejarCambioImagen(index)}
            className={`miniatura ${index === imagenSeleccionada ? "seleccionada" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
