import React from 'react';
import { CardX } from './style';

const Card = ({ children, ...otherProps }) => (
  <CardX bordered={false} {...otherProps}>
    {children}
  </CardX>
);

export default Card;
