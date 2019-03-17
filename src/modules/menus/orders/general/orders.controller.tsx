import * as React from 'react';
import OrdersView from './orders.view';
import { Order } from "../../../../model/order.model";
import { getOrders } from '../../../../data/orders.data';
import prato1 from '../../../../images/mock/prato1.png';
import axios from 'axios';

export default class OrdersController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      orders: []     
    };
  }
  
  componentDidMount() {
    const orders: Order[] = getOrders("");
    var order: Order;
    console.log('log')
    axios.get('localhost:5000/order')
    .then(response => {
      
      console.log(response);
      order.id = response.data.id;
      order.providerId = response.data.providerId;
      order.customerId = response.data.customerId;
      order.description = response.data.description;
      order.schedule = response.data.schedule;
      order.price = response.data.price;
      order.status = response.data.status;
      order.customerName = 'DB'
      order.img = prato1;
      order.details.appetizer = '';
      order.details.main = '';
      order.details.dessert = '';
      orders.push(order);
    })
    this.setState({orders: orders});
  }
  
  render() {
    return (
      <OrdersView orders={this.state.orders}/>
    );
  }
}

