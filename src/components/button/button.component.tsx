import * as React from 'react';
import './button.css';

interface ButtonProps {
  text: string;
}

export default class Button extends React.Component<ButtonProps, any> {
  render() {
    return (
      <div className='add-button__container'>
          <button className='add-button__button' type='button'>
            <a className='add-button__text'>
              {this.props.text}
            </a> 
          </button>
      </div>
    );
  }
} 

