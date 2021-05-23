import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  rootElement
);
