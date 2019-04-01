import * as React from 'react';
import './menus.css';
import MenuCell from '../../../components/menu/menu-cell.component';
import { Menu } from '../../../model/menu.model';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/button/button.component';

interface MenusViewProps {
  menus: Menu[];
}

export default class MenusView extends React.Component<MenusViewProps, any> {
  render() {
    return (
      <div className='menus'>
        <div className='menus__title__container'>
          <p className='menus__title__text'>Meus Cardápios</p>
        </div>
        <div>
        <div className='menus__button__container'>
          <NavLink to='/add-menu' style={{textDecoration: 'none'}}>
            <Button text={'+ Adicionar'}/>
          </NavLink>          
        </div>
        </div>
        <div>
          {this.props.menus.map( (menu: Menu) => <MenuCell {...menu}/>)}
        </div>
      </div>
    );
  }
};
