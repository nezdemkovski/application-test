import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { rootStore } from './configureStore';
import routes from './routes';

ReactDOM.render(
  <Provider store={rootStore}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
