import * as React from 'react';
import OrdersView from './orders.view';
import { Order } from "../../../model/order.model";
import { getOrders } from '../../../data/orders.data';
import prato1 from '../../../../images/mock/prato1.png';
import OrderCell from '../../../components/order/order-cell.component';

export default class OrdersController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      orders: []     
    };
  }
  
  async componentDidMount() {
    var orders: Order[] = await getOrders();
    console.log('log', orders);
    this.setState({orders: orders});
  }
  
  render() {
    console.log("render = ", this.state.orders);
    return (
      <OrdersView orders={this.state.orders}/>
    );
  }
}

