import * as React from 'react';
import './menu-detail.css';
import { Menu } from '../../../model/menu.model';
import ic_prato from '../../../images/ic_prato.png';
import defaultImg from '../../../images/mock/prato2.png'

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
          <img className='menu-detail__header__img' src={(this.props.menu.img && this.props.menu.img!='' ? this.props.menu.img : defaultImg)}></img>
          <p className='menu-detail__header__title'>{this.props.menu.title}</p>
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Descrição</p>
          <p className='menu-detail__section__text'>{this.props.menu.description}</p>
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Detalhes</p>
            {this.renderDetails('Entrada', this.props.menu.details.appetizer, ic_prato)}
            {this.renderDetails('Principal', this.props.menu.details.main, ic_prato)}
            {this.renderDetails('Sobremesa', this.props.menu.details.dessert, ic_prato)}      
        </div>
        <div className='menu-detail__section'>
          <p className='menu-detail__section__title'>Preço</p>
          <p className='menu-detail__section__text'>Valor/Pessoa: R$ {this.props.menu.price}</p>
        </div>
      </div>
    );
  }
}

export default MenuDetailView;