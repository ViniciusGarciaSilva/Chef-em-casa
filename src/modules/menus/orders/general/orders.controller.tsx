import * as React from 'react';
import OrdersView from './orders.view';
import { Order } from "../../../../model/order.model";
import { getOrders } from '../../../../data/orders.data';
import prato1 from '../../../../images/mock/prato1.png';
import axios from 'axios';
import OrderCell from '../../../../components/order/order-cell.component';

export default class OrdersController extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { 
      orders: []     
    };
  }
  
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
      response.data.map(order => {
        var newOrder = {
          id: order.id,
          providerId: order.providerId,
          customerId: order.customerId,
          description: order.description,
          schedule: order.schedule,
          price: order.price,
          status: order.status,
          customerName: order.name,
          img: prato1,
          appetizer: '',
          main: '',
          dessert: '',
        }
        console.log(newOrder);
        orders.push(order);
      })
      
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

