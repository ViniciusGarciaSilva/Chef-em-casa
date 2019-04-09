import * as React from 'react';
import './orders.css';
import OrderCell from '../../../components/order/order-cell.component';
import { Order } from '../../../model/order.model';

interface OrdersViewProps {
  orders: Order[];
}

export default class OrdersView extends React.Component<OrdersViewProps, any> {
  render() {
    return (
      <div className='menus'>
        <div className='menus__title__container'>
          <p className='menus__title__text'>Meus Pedidos</p>
        </div>
        <div>
          {this.props.orders.map( (order: Order) => <OrderCell {...order}/>)}
        </div>
      </div>
    );
  }
};
