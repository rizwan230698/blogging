import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 0 25px 0;
  width: 300px;

  &:first-child {
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
  padding: 8px 5px 2px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  color: rgba(0, 0, 0, 0.6);

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 700;
  }
`;
export const Label = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 700;
  }
`;
