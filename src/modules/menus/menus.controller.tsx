import * as React from 'react';
import MenusView from './menus.view';
import { getMenus } from '../../data/menus.data';
import { Menu } from './../../model/menu.model';

export default class MenusController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      menus: []     
    };
  }
  
  componentDidMount() {
    const menus: Menu[] = getMenus("");
    this.setState({menus: menus});
  }
  
  render() {
    return (
      <MenusView menus={this.state.menus}/>
    );
  }
}

