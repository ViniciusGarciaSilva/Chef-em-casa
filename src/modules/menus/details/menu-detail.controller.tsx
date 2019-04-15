import * as React from 'react';
import MenuDetailView from './menu-detail.view';
import { getMenuDetail } from '../../../data/menus.data';
import { Menu } from '../../../model/menu.model';

export interface MenuDetailContainerProps{
  id: string;
}

export default class MenuDetailContainer extends React.Component<MenuDetailContainerProps, any> {
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
    getMenuDetail(this.props.id).then(response => {
      console.log(response);
      this.setState({menu: response})
    });
  }
  
  render() {
    return (
      <MenuDetailView menu={this.state.menu}/>
    )
  }
}