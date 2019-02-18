import React, { Component } from 'react';
import Header from './components/header/header.component';
import './app.css';
import MenuDetailPage from './modules/menus/details/menu-detail.page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='page-container'>
          <MenuDetailPage/>
        </div>    
      </div>
    );
  }
}

export default App;
