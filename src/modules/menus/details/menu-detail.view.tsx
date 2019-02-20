import * as React from 'react';
import './menu-detail.css';
import { Menu } from '../../../model/menu.model';
import ic_prato from '../../../images/ic_prato.png';
import MenuDetailPage from './menu-detail.page';

interface MenuDetailViewProps {
  menu: Menu;
}

class MenuDetailView extends React.Component<MenuDetailViewProps, any> {
  private renderDetails(title: string, description: string, icon: any): any {
    return (
      <div>
        <div className='menu-detail__details'>
          <img className='menu-detail__details__icon' src={icon}></img>
          <p className='menu-detail__details__title'>{title}</p>
        </div>
        <p className='menu-detail__section__text'>{description}</p>
      </div>
    );
  }
  
  render() {
    return (
      <div className='menu-detail'>
        <div className='menu-detail__header'>
          <img className='menu-detail__header__img' src={this.props.menu.img}></img>
          <p className='menu-detail__header__title'>{this.props.menu.title}</p>
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Descrição</p>
          <p className='menu-detail__section__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Detalhes</p>
            {this.renderDetails('Entrada', this.props.menu.details.appetizer, ic_prato)}
            {this.renderDetails('Principal', this.props.menu.details.main, ic_prato)}
            {this.renderDetails('Sobremesa', this.props.menu.details.dessert, ic_prato)}      
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Preço</p>
          <p className='menu-detail__section__text'>Valor/Pessoa: R$ 00,00</p>
        </div>
      </div>
    );
  }
}

export default MenuDetailView;