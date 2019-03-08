import * as React from 'react';
import './order-cell.css'
import { NavLink } from 'react-router-dom';

export interface OrderCellProps {
  customerName: string;
  schedule: string;
  img: any;
  id: string;
}

export default class OrderCell extends React.Component<OrderCellProps, any> {
  render() {
    return (
      <div className='menu-cell'>
        <img className='menu-cell__img' src={this.props.img}></img>        
        <div className='menu-cell__info'>
          <div className='menu-cell__info__column'>
            <p className='menu-cell__info__title'>{this.props.customerName}</p>
            <p className='menu-cell__info__description'>{this.props.schedule}</p>
          </div>
          <div className='menu-cell__info__column'>
            <NavLink style={{textDecoration: 'none'}} to={`/menu-detail/${this.props.id}`}><p className='menu-cell__info__details'>Ver detalhes</p></NavLink>
          </div>
        </div>
      </div>
    );
  }
};