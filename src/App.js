import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { AuthContext, AuthProvider } from './context/AuthContext';

import Login from './pages/login';
import Home from './pages/home';
import PostDetail from './pages/postDetail';
import Layout from './components/layout';

const App = () => {
  const { token } = useContext(AuthContext);
  const getRoutes = () =>
    !token ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Redirect to="/" />
      </Switch>
    );

  return (
    <Router>
      <Layout>{getRoutes()}</Layout>
    </Router>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
