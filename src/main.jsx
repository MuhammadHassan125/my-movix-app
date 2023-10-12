import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './Store/store'; // Import the named export

import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
      <App/>
  </Provider>
  );
