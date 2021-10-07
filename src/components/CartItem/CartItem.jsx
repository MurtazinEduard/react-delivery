import React from "react";
import style from './CartItem.module.css'

const CartItem = ({id,name, totalPrice, totalCount, onRemove, onMinus,onPlus, img}) => {
    const handleRemoveClick = () => {
        onRemove(id)
    }
    const handleMinusItem = () => {
      onMinus(id)
    }
    const handlePlusItem = () => {
      onPlus(id)
    }
  return (
    <div className={style.cart__item}>
      <div className={style.cart__item__img}>
        <img
          className={style.block__image}
          src={img}
          alt="sushi"
        />
      </div>
      <div className={style.cart__item__info}>
        <h3>{name}</h3>
      </div>
      <div className={style.cart__item__count}>
        <div 
        onClick={handleMinusItem}
        className={style.cart__item__button}>
          <p>-</p>
        </div>
        <b>{totalCount}</b>
        <div 
        onClick={handlePlusItem}
        className={style.cart__item__button}>
          <p>+</p>
        </div>
      </div>
      <div className={style.cart__item__price}>
        <b>{totalPrice} ₽</b>
      </div>
      <div  className={style.cart__item__count}>
        <div onClick={handleRemoveClick} className={style.cart__item__button}>
          <p>&#215;</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
