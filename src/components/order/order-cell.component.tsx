import * as React from 'react';
import './order-cell.css'
import { NavLink } from 'react-router-dom';

export interface OrderCellProps {
  customerName: string;
  schedule: string;
  img: any;
  id: string;
  status: Boolean;
}

function TestarStatus(ent: any){
  const status: Boolean = ent;
  if(status == true){
    return <p className='order-cell_status_true'>{'aceito'}</p>
  }
  else return <p className='order-cell_status_false'>{'pendente'}</p>
}


export default class OrderCell extends React.Component<OrderCellProps, any> {
  render() {
    return (
      <div className='order-cell'>
        <img className='order-cell__img' src={this.props.img}></img>        
        <div className='order-cell__info'>
          <div className='order-cell__info__column'>
            <p className='order-cell__info__title'>{this.props.customerName}</p>
            <p className='order-cell__info__description'>{this.props.schedule}</p>
          </div>
          <div className='order-cell__info__column'>
            <NavLink style={{textDecoration: 'none'}} to={`/order-detail/${this.props.id}`}><p className='order-cell__info__details'>Ver detalhes</p></NavLink>
            <TestarStatus ent={this.props.status} />
          </div>
        </div>
      </div>
    );
  }
};