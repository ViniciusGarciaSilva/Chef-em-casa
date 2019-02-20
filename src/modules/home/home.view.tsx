import * as React from 'react';
import searchIcon from '../../images/ic_search.png';
import dinner from '../../images/dinner1.jpg';
import './home.css';
import HomeCard from './home-card/home-card.component';
import seja_chefe from '../../images/seja_chefe.png';
import chefs from '../../images/chefs.png';
import cardapios from '../../images/cardapios.png';

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
        <div className='home__main'>
          <p className='home__main__slogan'>Sinta o gosto de viver!</p>
          <div className='home__main__menus'>
            <div className='home__main__menus__card'>
              <HomeCard text='Conheça nossos chefes' img={chefs} />
            </div>
            <div className='home__main__menus__card'>
              <HomeCard text='Veja os cardápios disponíveis' img={cardapios} />
            </div>
            <div className='home__main__menus__card'>
              <HomeCard text='Seja um chefe' img={seja_chefe} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}