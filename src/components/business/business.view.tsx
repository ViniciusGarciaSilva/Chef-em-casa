import * as React from 'react';
import arrow from '../../images/flow_arrow.png';
import './business.css';

interface BusinessProps {
  title: string;
}

export default class Business extends React.Component<BusinessProps, any> {
  render() {
    const children = this.props.children;
    return(
      <div className='business'>
        <div className='business__title'>
          <a>{this.props.title}</a>
        </div>
        
        <div className='business__flow'>
          {React.Children.map(children, (child, i) => {
              return (
                <div className='business__flow__container'>
                  {i !=0 ? <img className='business__flow__arrow' src={arrow}/> : null}
                  {child}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}