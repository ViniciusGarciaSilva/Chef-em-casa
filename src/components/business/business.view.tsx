import * as React from 'react';
import arrow from '../../images/flow_arrow.png';

interface BusinessProps {
  title: string;
}

export default class Business extends React.Component<BusinessProps, any> {
  render() {
    const children = this.props.children;
    return(
      <div className='Business'>
        <a className='Business__title__container'>{this.props.title}</a>
        <div className='Business__flow'>
          {React.Children.map(children, child => {
              return (
                <div className='Business__flow__container'>
                  {child}
                  <img className='Business__flow__arrow' src={arrow}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}