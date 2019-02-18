import * as React from 'react';
import MenuDetailView from './menu-detail.view';
import { getMenuDetail } from '../../../data/menus.data';
import { Menu } from '../../../model/menu.model';

export default class MenuDetailContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menu: {
        id: '',
        title: '',
        description: '',
        img: '',
        details: {
          appetizer: '',
          main: '',
          dessert: '',
        },
        price: '',
      },
    };
  }

  componentDidMount() {
    const menu: Menu = getMenuDetail('2');
    this.setState({menu: menu});
  }
  
  render() {
    return (
      <MenuDetailView menu={this.state.menu}/>
    )
  }
}