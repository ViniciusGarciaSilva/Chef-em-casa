import * as React from 'react';
import './home-card.css';

interface HomeCardProps {
  img: any;
  text: string;  
}

export default class HomeCard extends React.Component<HomeCardProps, any> {
  render() {
    return (
      <div className='home-card' style={{backgroundImage: this.props.img}}>
        <a className='home-card__text'>{this.props.text}</a>
      </div>
    )
  }
}