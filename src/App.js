import React, { Component } from 'react';
import Header from './components/header/header.component';
import MenusView from './modules/menus/menus.view';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='page-container'>
          <MenusView/>
        </div>
      </div>
    );
  }
}

export default App;
