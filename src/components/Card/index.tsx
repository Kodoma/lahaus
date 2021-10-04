import React from 'react';
import {CardProps} from "../../models/favoriteDetail";
import {Card, CardContent} from "@material-ui/core";


const CardComponent: React.FunctionComponent<CardProps> = ({ children, containerStyle = '' }) => {
  return (
      <Card variant="outlined" className={`rounded-lg${containerStyle}`}>
        {children}
      </Card>
  );
};

export default CardComponent;
