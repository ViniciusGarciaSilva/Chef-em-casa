import * as React from 'react';
import './menu-cell.css'
import { timingSafeEqual } from 'crypto';

export interface MenuCellProps {
  title: string;
  description: string;
  img: any;
}

export default class MenuCell extends React.Component<MenuCellProps, any> {
  render() {
    return (
      <div className='container'>
        <img src={this.props.img}></img>        
        <div className='info-container'>
          <div className='info-column'>
            <p className='info-title'>{this.props.title}</p>
            <p className='info-description'>{this.props.description}</p>
          </div>
          <div className='info-column'>
            <p className='info-details'>Ver detalhes</p>
          </div>
        </div>
      </div>
    );
  }
};