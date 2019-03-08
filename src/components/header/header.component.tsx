import * as React from 'react';
import './header.css';
import searchIcon from '../../images/ic_search.png';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="Header">
        <div className='header-container'>
          <NavLink to='/'><a>Início</a></NavLink>
          <a>Cardápios</a>
          <a>Chefs</a>
          <div className="search-bar-container">
            <img className='ic_search' src={searchIcon}></img>
            <input className='search-bar' placeholder='Pesquise um cardápio' />
          </div>
          <NavLink to='/menus'><a>Meu Menu</a></NavLink>
          <NavLink to='/orders'><a>Meus Pedidos</a></NavLink>
        </div>
      </header>
    );
  }
}
