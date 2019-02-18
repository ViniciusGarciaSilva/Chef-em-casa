import * as React from 'react';
import './header.css';
import searchIcon from '../../images/ic_search.png';

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="Header">
        <div className='header-container'>
          <a>Início</a>
          <a>Cardápios</a>
          <a>Chefs</a>
          <div className="search-bar-container">
            <img className='ic_search' src={searchIcon}></img>
            <input className='search-bar' placeholder='Pesquise um cardápio' />
          </div>
          <a>Meu Menu</a>
        </div>

      </header>
    );
  }
}
