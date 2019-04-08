import * as React from 'react';
import './menu-cell.css'
import { NavLink } from 'react-router-dom';
import defaultImg from '../../images/mock/prato2.png'

export interface MenuCellProps {
  title: string;
  description: string;
  img: any;
  id: string;
}

export default class MenuCell extends React.Component<MenuCellProps, any> {
  render() {
    console.log(this.props.img);
    return (
      <div className='menu-cell'>
        <img className='menu-cell__img' src={(this.props.img && this.props.img!='' ? this.props.img : defaultImg)}></img>        
        <div className='menu-cell__info'>
          <div className='menu-cell__info__column'>
            <p className='menu-cell__info__title'>{this.props.title}</p>
            <p className='menu-cell__info__description'>{this.props.description}</p>
          </div>
          <div className='menu-cell__info__column'>
            <NavLink style={{textDecoration: 'none'}} to={`/menu-detail/${this.props.id}`}><p className='menu-cell__info__details'>Ver detalhes</p></NavLink>
          </div>
        </div>
      </div>
    );
  }
};