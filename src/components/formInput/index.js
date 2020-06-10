import React from 'react';
import { Container, Input, Label } from './style';
const FormInput = ({ label, value = '', ...otherProps }) => (
  <Container>
    <Input {...otherProps} value={value} autoComplete="off" />
    <Label className={`form-input-label ${value && 'shrink'}`}>{label}</Label>
  </Container>
);

export default FormInput;
