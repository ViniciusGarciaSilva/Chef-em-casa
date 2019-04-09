import * as React from 'react';

interface BusinessCardProps {
  img: any;
  text: string;
}

export default class BussinessCard extends React.Component<BusinessCardProps, any> {
  render() {
    return(
      <div className='business-card'>
        <img className='business-card__img' src={this.props.img}/>
        <a className='business-card__text'/>
      </div>
    );
  }
}