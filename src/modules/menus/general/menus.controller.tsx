import * as React from 'react';
import MenusView from './menus.view';
import { getMenus } from '../../../data/menus.data';
import { Menu } from '../../../model/menu.model';

export default class MenusController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      menus: []     
    };
  }
  
  componentDidMount() {
    getMenus().then(response => {
      console.log(response);
      this.setState({menus: response})
    });
  }
  
  render() {
    return (
      <MenusView menus={this.state.menus}/>
    );
  }
}

