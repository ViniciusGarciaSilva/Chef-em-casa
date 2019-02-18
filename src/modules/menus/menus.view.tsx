import * as React from 'react';
import './menus.css';
import MenuCell from './menu-cell.component';
import { Menu } from './../../model/menu.model';

interface MenusViewProps {
  menus: Menu[];
}

export default class MenusView extends React.Component<any, any> {
  render() {
    return (
      <div className='menus-container'>
        <div className='title-container'>
          <p className='title'>Meus Cardápios</p>
        </div>
        <div>
          {this.props.menus.map( (menu: Menu) => <MenuCell {...menu}/>)}
        </div>
      </div>
    );
  }
};
