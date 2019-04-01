import * as React from 'react';
import './button.css';

export default class Button extends React.Component<any, any> {
  render() {
    return (
      <div className='add-button__container'>
          <button className='add-button__button' type='button'>
            <a className='add-button__text'>
              + Adicionar
            </a> 
          </button>
      </div>
    );
  }
} 

