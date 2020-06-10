import React from 'react';

import { ButtonX } from './style';

const Button = ({ children, ...otherProps }) => (
  <ButtonX type="primary" {...otherProps}>
    {children}
  </ButtonX>
);

export default Button;
