import * as React from 'react';
import './menus.css';
import MenuCell from './menu-cell.component';
import prato1 from '../../images/mock/prato1.png'
import prato2 from '../../images/mock/prato2.png'
import prato3 from '../../images/mock/prato3.png'

export default class MenusView extends React.Component<any, any> {
  render() {
    return (
      <div className='menus-container'>
        <div className='title-container'>
          <p className='title'>Meus Cardápios</p>
        </div>
        <div>
          <MenuCell {...MenuMock[0]}/>
          <MenuCell {...MenuMock[1]}/>
          <MenuCell {...MenuMock[2]}/>
        </div>
      </div>
    );
  }
};

const MenuMock = [
  {
    title: 'Galinha assada',
    description: 'Delicioso prato preparado com frango, batatas e repolho.',
    image: prato1
  },
  {
    title: 'Frango Xadrez',
    description: 'Frango preparado com pimentão, cebola, molho shoyu, gengibre e o toque especial do chefe.',
    image: prato2
  },
  {
    title: 'Nhoque',
    description: 'Nhoque ao molho sugo preparado com uma massa caseira e temperado com as mais diversas especiarias orientais.',
    image: prato3
  },
]