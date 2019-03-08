import * as React from 'react';
import prato3 from '../../../../images/mock/prato3.png';
import './order-detail.css';
import ic_prato from '../../../../images/ic_prato.png';

export default class OrderDetailView extends React.Component<any, any> {
  private renderDetails(title: string, description: string, icon: any): any {
    return (
      <div>
        <div className='details'>
          <img className='icon' src={icon}></img>
          <p className='details-title'>{title}</p>
        </div>
        <p className='section-text'>{description}</p>
      </div>
    );
  }
  
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <img src={prato3}></img>
          <p className='title'>Nome: Jhon Doe</p>
          <p className='title'>Pedido: Nhoque</p>
        </div>
        <div className='section'>
          <p className='section-title'>Descrição</p>
          <p className='section-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='section'>
          <p className='section-title'>Detalhes</p>
          {this.renderDetails('Entrada', 'Prato de entrada e seus ingredientes', ic_prato)}
          {this.renderDetails('Principal', 'Prato principal e seus ingredientes', ic_prato)}
          {this.renderDetails('Sobremesa', 'Sobremesa e seus ingredientes', ic_prato)}
        </div>
        <div className='section'>
          <p className='section-title'>Preço</p>
          <p className='section-text'>Valor/Pessoa: R$ 00,00</p>
        </div>
      </div>
    );
  }
}
