import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import './assets/css/style.css';
import './assets/css/colors/blue.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxReducer from './redux/root-reducer';

const store = createStore(ReduxReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
