import * as React from 'react';
import ic_prato from '../../../images/ic_prato.png';
import Button from '../../../components/button/button.component';
import { NavLink } from 'react-router-dom';

interface AddMenuComponentProps {
  onChangeTitle: (event) => void;
  onChangeDescription: (event) => void;
  onChangeAppetizer: (event) => void;
  onChangeMain: (event) => void;
  onChangeDessert: (event) => void;
  onChangePrice: (event) => void;
  onSubmit: (event) => void;
}

export default class AddMenuComponent extends React.Component<AddMenuComponentProps,any> {
  render(){
    return (
      <div className='add-menu'>
        <div className='add-menu__title__container'>
          <p className='add-menu__title__text'>Adicionar Cardápio</p>
        </div>
        
        <form className='add-menu__form'>
          <div className='add-menu__form__input__container'>
            <label className='add-menu__form__input__label'>Nome do Cardápio</label>
            <input onChange={this.props.onChangeTitle} className='add-menu__form__input__default'/>
          </div>
          
          <div className='add-menu__form__input__container'>
            <label className='add-menu__form__input__label'>Descrição</label>
            <textarea onChange={this.props.onChangeDescription} className='add-menu__form__text-area' name="Text1"></textarea>
          </div>
          
          <div className='add-menu__form__input__container'>
            <div className='add-menu__form__input__dishes__container'>
              <img className='add-menu__form__input__dishes__container' src={ic_prato}/>
              <label className='add-menu__form__input__label'>Entrada</label>
            </div>
            <input onChange={this.props.onChangeAppetizer} className='add-menu__form__input__default'/>
          </div>
          
          <div className='add-menu__form__input__container'>
            <div className='add-menu__form__input__dishes__container'>
              <img className='add-menu__form__input__dishes__container' src={ic_prato}/>
              <label className='add-menu__form__input__label'>Principal</label>
            </div>
            <input onChange={this.props.onChangeMain} className='add-menu__form__input__default'/>
          </div>
          
          <div className='add-menu__form__input__container'>
            <div className='add-menu__form__input__dishes__container'>
              <img className='add-menu__form__input__dishes__container' src={ic_prato}/>
              <label className='add-menu__form__input__label'>Sobremesa</label>
            </div>
            <input onChange={this.props.onChangeDessert} className='add-menu__form__input__default'/>
          </div>
          <div className='add-menu__form__input__container'>
            <label className='add-menu__form__input__label'>Preço</label>
            <div className='add-menu__form__price__container'>
              <a className='add-menu__form__price__text'>R$</a>
              <input onChange={this.props.onChangePrice} className='add-menu__form__price__input'/>
              <a className='add-menu__form__price__text'>/pessoa</a>
            </div>
          </div>
          <div className='add-menu__form__submit'>
          <NavLink to='/menus' style={{textDecoration: 'none'}}>
            <Button onPress={this.props.onSubmit} text={'Adicionar'}/>
          </NavLink>    
          </div>
        </form>
      </div>
    )
  }
}