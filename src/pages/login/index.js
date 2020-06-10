import React, { useState } from 'react';
import { Tabs } from 'antd';

import { Container, GlobalStyles } from './style';
import Card from '../../components/card';
import FormInput from '../../components/formInput';
import Button from '../../components/button';

const { TabPane } = Tabs;

const Login = () => {
  const [formData, setFormData] = useState({});
  const [activeKey, setActiveKey] = useState('1');

  const handleTabs = (key) => {
    setActiveKey(key);
    setFormData({});
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const renderForm = (formtype) => {
    const { name, email, password, confirmPassword } = formData;
    return (
      <>
        {formtype === 'Sign up' && (
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
        {formtype === 'Sign up' && (
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleInput}
          />
        )}
        <Button onClick={handleSubmit}>{formtype}</Button>
      </>
    );
  };

  return (
    <Container>
      <GlobalStyles />
      <Card>
        <Tabs activeKey={activeKey} size="large" onChange={handleTabs}>
          <TabPane tab="Sign in" key="1">
            {renderForm('Sign in')}
          </TabPane>
          <TabPane tab="Sign up" key="2">
            {renderForm('Sign up')}
          </TabPane>
        </Tabs>
      </Card>
    </Container>
  );
};

export default Login;
