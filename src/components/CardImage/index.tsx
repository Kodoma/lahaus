import React from 'react';

import Card from '../Card';

import {CardImageProps} from "../../models/favoriteDetail";

const CardImage: React.FunctionComponent<CardImageProps> = ({ image, alt }) => {
  return (
    <Card>
      <img src={image} width={292} height={196} alt={alt} className="w-full border border-white | object-cover | rounded-lg" />
    </Card>
  );
};

export default CardImage;
