import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Just Another Hand', 'Montserrat']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));