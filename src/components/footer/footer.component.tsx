import * as React from 'react';
import ic_facebook from '../../images/ic_facebook.png';
import ic_instagram from '../../images/ic_instagram.png';
import ic_whatsapp from '../../images/ic_whatsapp.png';
import ic_twitter from '../../images/ic_twitter.png';
import './footer.css';

export default class Footer extends React.Component<any, any> {
  render() {
    return(
      <div className='footer'>
        <div className='footer__description'>
          <p className='footer__description__text'>Chef em casa é um site preparado para levar até o conforto</p>
          <p className='footer__description__text'>de seu lar um chef altamente capacitado e preparar</p>
          <p className='footer__description__text'>o que de melhor essa vida pode oferecer!</p>
        </div>
        <div className='footer__talk'>
            <p className='footer__talk__text'>Fale conosco!</p>
          </div>
        <div className='footer__social-medias'>
          <img src={ic_facebook} className='footer__social-medias__icon'/>
          <img src={ic_instagram} className='footer__social-medias__icon'/>
          <img src={ic_whatsapp} className='footer__social-medias__icon'/>
          <img src={ic_twitter} className='footer__social-medias__icon'/>  
        </div>
        <div className='footer__copyrights'>
          <p className='footer__copyrights__text'>Chef em Casa - Gibraltar ltda.  - 31.895.069/0001-66 | Todos os direitos reservados 2019.</p>
        </div>
      </div>
    )
  }
}
