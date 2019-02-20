import * as React from 'react';
import searchIcon from '../../images/ic_search.png';
import dinner from '../../images/dinner1.jpg';
import './home.css';

export default class HomeView extends React.Component<any, any> {
  render() {
    return (
      <div className='home'>  
        <div background-image={dinner} className='home__header'>
          <div className='home__header__column'>
            <div className='home__header__row'>
              <p className='home__header__title'>Chef em Casa</p>
            </div>
            <div className="home__header__search-bar">
              <img className='home__header__search-bar__icon' src={searchIcon}></img>
              <input className='home__header__search-bar__input' placeholder='Pesquise um cardápio' />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}