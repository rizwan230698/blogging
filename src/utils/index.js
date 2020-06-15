import { message } from 'antd';

export const shortBody = (body) => {
  const words = body.split(' ');
  let newBody = '';
  for (let word of words) {
    if (newBody.length + word.length >= 200) {
      return `${newBody.trim()}...`;
    } else {
      newBody += ` ${word}`;
    }
  }
  return `${newBody.trim()}...`;
};

export const showError = (error, customError) =>
  customError
    ? message.error(customError)
    : error.message.split(':')[1].trim().toLowerCase().includes('unique')
    ? message.error('This email is already taken.')
    : error.message.split(':')[1].trim().toLowerCase().includes('find post')
    ? message.error('Sorry, This post has been deleted.')
    : message.error(error.message.split(':')[1].trim());

export const validateAuthForm = (formType, formValues) => {
  if (formType === 'Signup') {
    const { name, email, password, confirmPassword } = formValues;
    if (!name || !email || !password || !confirmPassword) {
      return 'Please fill all the fields.';
    } else if (password !== confirmPassword) {
      return 'Password did not match.';
    }
  }
  if (formType === 'Login') {
    const { email, password } = formValues;
    if (!email || !password) {
      return 'Please fill all the fields.';
    }
  }
};

export const soryByRecent = (a, b) => (a.updatedAt > b.updatedAt ? -1 : 1);
