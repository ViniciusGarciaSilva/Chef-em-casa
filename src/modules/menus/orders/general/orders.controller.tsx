import * as React from 'react';
import OrdersView from './orders.view';
import { Order } from "../../../../model/order.model";
import { getOrders } from '../../../../data/orders.data';

export default class OrdersController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      orders: []     
    };
  }
  
  componentDidMount() {
    const orders: Order[] = getOrders("");
    this.setState({orders: orders});
  }
  
  render() {
    return (
      <OrdersView orders={this.state.orders}/>
    );
  }
}

