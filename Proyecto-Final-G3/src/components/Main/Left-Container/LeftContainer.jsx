
import React, { useState } from 'react';
import './LeftContainer.css'; // Importa el archivo CSS

const LeftContainer = () => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

  const imagenes = [
    '/src/Images/image-product-1.jpg',
    '/src/Images/image-product-2.jpg',
    '/src/Images/image-product-3.jpg',
    '/src/Images/image-product-4.jpg',
  ];

  const manejarCambioImagen = (index) => {
    setImagenSeleccionada(index);
  };

  return (
    <div className="left-container">
      <div>
        <img
          src={imagenes[imagenSeleccionada]}
          alt={`Imagen ${imagenSeleccionada + 1}`}
          className="selected-image"
        />
      </div>
      <div className="mini-images">
        {imagenes.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Miniatura ${index + 1}`}
            onClick={() => manejarCambioImagen(index)}
            className={`miniatura ${index === imagenSeleccionada ? 'seleccionada' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;