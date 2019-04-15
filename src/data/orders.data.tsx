import prato1 from '../images/mock/prato1.png';
import prato2 from '../images/mock/prato2.png';
import prato3 from '../images/mock/prato3.png';
import axios from 'axios';
import { Order } from '../model/order.model';

export async function getOrders(): Promise<Order[]> {
  var orders: Order[] = [];
  //await axios.get('https://chef-em-casa-backend.herokuapp.com/order')
  await axios.get('https://chef-em-casa-backend.herokuapp.com/order')
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
          details: {
            appetizer: 'Prato de entrada e seus ingredientes', 
            main: 'Prato principal e seus ingredientes',
            dessert: 'Sobremesa e seus ingredientes',
          },
        }
        console.log(newOrder);
        orders.push(newOrder);
      })
      return orders;
    })
    .catch(() => {
      var newOrder = {
        id: '',
        providerId:'',
        customerId:'',
        description:'',
        schedule:'',
        price:'',
        status:0,
        customerName:'',
        img: prato1,
        details: {
          appetizer: 'Prato de entrada e seus ingredientes', 
          main: 'Prato principal e seus ingredientes',
          dessert: 'Sobremesa e seus ingredientes',
        },
      }
      orders.push(newOrder);
      console.log(orders);
      return orders;
    })
  return orders;
}

export async function getOrderDetail(id: string): Promise<Order> {
  const orders = await getOrders();
  const order = orders.find(order => order.id === id);
  return order ? order : orders[0];
}

var orders: Order[] = [
  {
    id: '100',
    providerId: '0',
    customerId: '0',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    customerName: 'C1',
    schedule: 'hoje',
    img: prato1,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
    status: 0,
  },
  {
    id: '101',
    providerId: '0',
    customerId: '0',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    customerName: 'C2',
    schedule: 'hoje',
    img: prato2,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
    status: 0,
  },
  {
    id: '102',
    providerId: '0',
    customerId: '0',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    customerName: 'C3',
    schedule: 'hoje',
    img: prato3,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
    status: 1,
  },
]
