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

  /*componentWillMount() {
    const orders: Order[] = getOrders("");
    var order: Order;
    axios.get('localhost:5000/order')
    .then(response => {
      
      console.log(response);
      // order.id = response.data.id;
      // order.providerId = response.data.providerId;
      // order.customerId = response.data.customerId;
      // order.description = response.data.description;
      // order.schedule = response.data.schedule;
      // order.price = response.data.price;
      // order.status = response.data.status;
      // order.customerName = 'DB'
      // order.img = prato1;
      // order.details.appetizer = '';
      // order.details.main = '';
      // order.details.dessert = '';
      order = orders[0];
      orders.push(order);
    })
    .catch(() => {
      console.log('catch');
      order = orders[0];
      orders.push(order);
    })
  }*/
  
  async componentDidMount() {
    var orders: Order[] = getOrders("");
    var order: Order = {
      id: '4',
      providerId: '0',
      customerId: '0',
      description: 'Delicioso prato preparado com frango, batatas e repolho.',
      customerName: 'C4',
      schedule: 'hoje',
      img: prato1,
      details: {
        appetizer: 'Prato de entrada e seus ingredientes', 
        main: 'Prato principal e seus ingredientes',
        dessert: 'Sobremesa e seus ingredientes',
      },
      price: '00,00',
      status: 0,
    };
    console.log('log')
    await axios.get('http://localhost:5000/order')
    .then(response => {
      console.log('then')
      console.log(response);
      console.log(response.data[0].status);
      order.id = response.data[0].id;
      order.providerId = response.data[0].providerId;
      order.customerId = response.data[0].customerId;
      order.description = response.data[0].description;
      order.schedule = response.data[0].schedule;
      order.price = response.data[0].price;
      order.status = response.data[0].status;
      order.customerName = 'DB'
      order.img = prato1;
      order.details.appetizer = '';
      order.details.main = '';
      order.details.dessert = '';
      orders.push(order);
    })
    .catch(() => {
      console.log('catch');
      order.id = '13';
      order.providerId = '';
      order.customerId = '';
      order.description = '';
      order.schedule = '';
      order.price = '';
      order.status = 1;
      order.customerName = 'DB'
      order.img = prato1;
      order.details.appetizer = '';
      order.details.main = '';
      order.details.dessert = '';
      //order = orders[0];
      orders.push(order);
      console.log(orders);
    })
    this.setState({orders: orders});
  }
  
  render() {
    return (
      <OrdersView orders={this.state.orders}/>
    );
  }
}

