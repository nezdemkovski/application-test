import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

export default (
  <App>
    <Route exact path="/" component={HomePage}/>
    <Route path="/details/:id" component={DetailsPage}/>
  </App>
);
