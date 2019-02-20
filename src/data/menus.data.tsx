import prato1 from '../images/mock/prato1.png'
import prato2 from '../images/mock/prato2.png'
import prato3 from '../images/mock/prato3.png'
import { Menu } from '../model/menu.model';

export function getMenus(id: string): Menu[] {
  return MenuMock;
}

export function getMenuDetail(id: string): Menu {  
  const menu = MenuMock.find(menu => menu.id === id);
  return menu ? menu : MenuMock[0];
}

const MenuMock: Menu[] = [
  {
    id: '0',
    title: 'Galinha assada',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    img: prato1,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
  {
    id: '1',
    title: 'Frango Xadrez',
    description: 'Frango preparado com pimentão, cebola, molho shoyu, gengibre e o toque especial do chefe.',
    img: prato2,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
  {
    id: '2',
    title: 'Nhoque',
    description: 'Nhoque ao molho sugo preparado com uma massa caseira e temperado com as mais diversas especiarias orientais.',
    img: prato3,
    details: {
      appetizer: 'Prato de entrada e seus ingredientes', 
      main: 'Prato principal e seus ingredientes',
      dessert: 'Sobremesa e seus ingredientes',
    },
    price: '00,00',
  },
]
