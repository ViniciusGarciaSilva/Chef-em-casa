import prato1 from '../images/mock/prato1.png'
import prato2 from '../images/mock/prato2.png'
import prato3 from '../images/mock/prato3.png'
import { Order } from '../model/order.model';

export function getOrders(id: string): Order[] {
  return OrderMock;
}

export function getMenuDetail(id: string): Order {  
  const menu = OrderMock.find(menu => menu.id === id);
  return menu ? menu : OrderMock[0];
}

const OrderMock: Order[] = [
  {
    id: '0',
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
    status: false,
  },
  {
    id: '1',
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
    status: true,
  },
  {
    id: '2',
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
    status: true,
  },
]
