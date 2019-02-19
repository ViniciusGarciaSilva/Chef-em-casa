import * as React from 'react';
import './menu-cell.css'

export interface MenuCellProps {
  title: string;
  description: string;
  img: any;
}

export default class MenuCell extends React.Component<MenuCellProps, any> {
  render() {
    return (
      <div className='menu-cell'>
        <img className='menu-cell__img' src={this.props.img}></img>        
        <div className='menu-cell__info'>
          <div className='menu-cell__info__column'>
            <p className='menu-cell__info__title'>{this.props.title}</p>
            <p className='menu-cell__info__description'>{this.props.description}</p>
          </div>
          <div className='menu-cell__info__column'>
            <p className='menu-cell__info__details'>Ver detalhes</p>
          </div>
        </div>
      </div>
    );
  }
};