import * as React from 'react';
import './menu-cell.css';
import prato1 from '../../images/mock/prato1.png'

export default class MenuCell extends React.Component<any, any> {
  render() {
    return (
      <div className='container'>
        <img src={prato1}></img>        
        <div className='info-container'>
          <div className='info-column'>
            <p className='info-title'>Galinha Assada</p>
            <p className='info-description'>Delicioso prato preparado com frango, batatas e repolho</p>
          </div>
          <div className='info-column'>
            <p className='info-details'>Ver detalhes</p>
          </div>
        </div>
      </div>
    );
  }
};