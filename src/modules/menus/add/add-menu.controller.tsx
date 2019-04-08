import * as React from 'react';
import AddMenuComponent from './add-menu.view';
import { Menu } from '../../../model/menu.model';

export default class AddMenuController extends React.Component<any,any> {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        details: {}
      }
    }
  }

  render(){
    console.log(this.state.menu);
    return (
      <AddMenuComponent
        onChangeTitle = {this.handleTitle}
        onChangeDescription = {this.handleDescription}
        onChangeAppetizer = {this.handleAppetizer}
        onChangeMain = {this.handleMain}
        onChangeDessert = {this.handleDessert}
        onChangePrice = {this.handlePrice}
     />
    )
  }

  handleTitle = (event) => {
    const menu: Menu = this.state.menu;
    menu.title = event.target.value;
    this.setState({menu: menu})
  }
  
  handleDescription = (event) => {
    const menu: Menu = this.state.menu;
    menu.description = event.target.value;
    this.setState({menu: menu})
  }

  handleAppetizer = (event) => {
    const menu: Menu = this.state.menu;
    menu.details.appetizer = event.target.value;
    this.setState({menu: menu})
  }

  handleDessert = (event) => {
    const menu: Menu = this.state.menu;
    menu.details.dessert = event.target.value;
    this.setState({menu: menu})
  }

  handleMain = (event) => {
    const menu: Menu = this.state.menu;
    menu.details.main = event.target.value;
    this.setState({menu: menu})
  }

  handlePrice = (event) => {
    const menu: Menu = this.state.menu;
    menu.price = event.target.value;
    this.setState({menu: menu});
  }  
}