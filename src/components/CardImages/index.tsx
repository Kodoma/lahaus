// Dependencies
import React from 'react';

// Components
import CardImage from '../CardImage';

import {CardImagesProps} from "../../models/favoriteDetail";

const CardImages: React.FunctionComponent<CardImagesProps> = ({ images }) => {
  const newImages = images.slice(0, 3);
  const imagesCopy = [...images];
  imagesCopy.splice(0, 2);

  console.log('images.length', images.length);
  console.log('imagesCopy.length', imagesCopy.length);

  let containerStyle = `card-images-container--content-${images.length}`;
  if (images.length >= 3) {
    containerStyle = 'card-images-container--content-3';
  }
  return (
    <div className={`card-images-container ${containerStyle}`}>
      {newImages.map(({ id, image, alt }, index) => {
        const className = `image-container-${index + 1}`;

        console.log('className', className)
        return (
          <div key={id} className={className}>
            <CardImage image={image} alt={alt} />
          </div>
        );
      })}
      {imagesCopy.length > 0 && (
        <div className="absolute | right-4 | z-50 | h-full | flex items-center | font-semibold | text-white text-lg">
          <span>+ {imagesCopy.length}</span>
        </div>
      )}
    </div>
  );
};

export default CardImages;
