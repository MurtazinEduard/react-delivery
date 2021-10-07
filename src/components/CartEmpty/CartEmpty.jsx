import React from "react";
import { Link } from "react-router-dom";
import style from './CartEmpty.module.css'
import img from '../../assets/img/empty-cart.png'
const CartEmpty = () => {
  return (
    <div className={style.cart__empty}>
      <div>
        <h2>
          В КОРЗИНЕ НЕТ ТОВАРОВ
        </h2>
        <p>
          Вероятней всего, вы не заказывали у нас еду.
          <br />
          Для того, чтобы заказать суши или роллы, перейди на главную страницу.
        </p>
      </div>
      <img src={img} alt='cart'/>
        <Link to='/' className={style.button}>
          <div className={style.button__name}>Вернуться назад</div>
        </Link>
    </div>
  );
};

export default CartEmpty;
