import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [state, setstate] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setstate({ ...state, [name]: value });
  };

  const onSubmit = (...args) => {
    callback(...args);
  };

  const resetForm = () => {
    setstate(initialState);
  };

  return [state, onChange, onSubmit, resetForm];
};
