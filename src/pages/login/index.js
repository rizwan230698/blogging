import React, { useState, useContext, useEffect } from 'react';
import { Tabs, message } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import { Container, GlobalStyles } from './style';
import Card from '../../components/card';
import FormInput from '../../components/formInput';
import Button from '../../components/button';
import { useForm } from '../../hooks/useForm';
import { SIGN_UP, LOG_IN } from '../../graphql/mutation/user';
import { showError, validateAuthForm } from '../../utils';
import { AuthContext } from '../../context/AuthContext';

const { TabPane } = Tabs;

const Login = () => {
  const { login: setCurrentUser } = useContext(AuthContext);
  const [formData, handleInput, handleSubmit, resetForm] = useForm(
    handleLoginSignup,
    {}
  );
  const [activeKey, setActiveKey] = useState('1');
  const [signup, { loading: signingUp }] = useMutation(SIGN_UP, {
    update(_, result) {
      setCurrentUser(result.data.createUser);
    },
    onError(error) {
      showError(error);
    },
    variables: {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    },
  });
  const [login, { loading: loggingIn }] = useMutation(LOG_IN, {
    update(_, result) {
      setCurrentUser(result.data.login);
    },
    onError(error) {
      showError(error);
    },
    variables: {
      email: formData.email,
      password: formData.password,
    },
  });

  useEffect(() => {
    //clear form data on unmount
    return resetForm;
  }, [resetForm]);

  const handleTabs = (key) => {
    setActiveKey(key);
    //clear form data on tab switch
    resetForm();
  };

  function handleLoginSignup(formType) {
    const error = validateAuthForm(formType, formData);
    if (error) {
      return message.error(error);
    }
    formType === 'Signup' ? signup() : login();
  }

  const renderForm = (formtype) => {
    const { name, email, password, confirmPassword } = formData;
    return (
      <>
        {formtype === 'Signup' && (
          <FormInput
            name="name"
            type="text"
            label="Name"
            value={name}
            onChange={handleInput}
          />
        )}
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleInput}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleInput}
        />
        {formtype === 'Signup' && (
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleInput}
          />
        )}
        <Button
          loading={formtype === 'Signup' ? signingUp : loggingIn}
          onClick={handleSubmit.bind(this, formtype)}
        >
          {formtype}
        </Button>
      </>
    );
  };

  return (
    <Container>
      <GlobalStyles />
      <Card shadow="lg" translate="none">
        <Tabs activeKey={activeKey} size="large" onChange={handleTabs}>
          <TabPane tab="Login" key="1">
            {renderForm('Login')}
          </TabPane>
          <TabPane tab="Signup" key="2">
            {renderForm('Signup')}
          </TabPane>
        </Tabs>
      </Card>
    </Container>
  );
};

export default Login;
