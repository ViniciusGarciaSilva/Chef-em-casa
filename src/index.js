import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';
import { BrowserRouter } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Just Another Hand', 'Montserrat','Open Sans']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
, document.getElementById('root'));