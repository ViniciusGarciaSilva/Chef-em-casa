import * as React from 'react';
import './order-cell.css'
import { NavLink } from 'react-router-dom';

export interface OrderCellProps {
  customerName: string;
  schedule: string;
  img: any;
  id: string;
  status: number;
}

function TestarStatus(ent: any){ // Queria fazer essa porcaria funcionar, mas tive que arranjar outro jeito... :(
  const status: number = ent;
  console.log(status);
  if(status > 0){
    return <p className='order-cell_status_true'>{'aceito'}</p>
  }
  else return <p className='order-cell_status_false'>{'pendente'}</p>
}

function Aceito () {
  return <p className='order-cell_status_true'>{'Aceito'}</p>
}

function Pendente () {
  return <p className='order-cell_status_false'>{'Pendente'}</p>
}


export default class OrderCell extends React.Component<OrderCellProps, any> {
  render() {
    return (
      <div className='order-cell'>
        <img className='order-cell__img' src={this.props.img}></img>        
        <div className='order-cell__info'>
          <div className='order-cell__info__column'>
            <div>
              <p className='order-cell__info__title'>Cliente: {this.props.customerName}</p>
              <p className='order-cell__info__description'>Data: {this.props.schedule}</p>
            </div>
            <div>
              <p className='order-cell__info__description'>Status: 
              {this.props.status === 1 ? (
                <Aceito />
              ) : (
                <Pendente />
              )}
              </p>
            </div>
          </div>
          <div className='order-cell__info__column'>
            <NavLink style={{textDecoration: 'none'}} to={`/order-detail/${this.props.id && this.props.id!='' ? this.props.id : '1' }`}><p className='order-cell__info__details'>Ver detalhes</p></NavLink>
          </div>
        </div>
      </div>
    );
  }
};