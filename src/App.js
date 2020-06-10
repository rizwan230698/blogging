import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import PostDetail from './pages/postDetail';
import Layout from './components/layout';

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/post" component={PostDetail} />
    </Layout>
  </Router>
);

export default App;
