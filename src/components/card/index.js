import React from 'react';
import { CardX } from './style';

const Card = ({ children }) => <CardX bordered={false}>{children}</CardX>;

export default Card;
