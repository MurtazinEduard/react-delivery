import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CartEmpty, CartItem } from "../../components";
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import style from './Cart.module.css'
const Cart = () => {
  const dispatch = useDispatch()

  const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);

  const addedSushi = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  }

  const onRemoveItem = (id) => {
    if(window.confirm('Вы действительно хотите удалить?')){
      dispatch(removeCartItem(id));
    }
  }

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  }
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  }

  const onClickOreder = () => {
    console.log('Ваш заказ: ', items)
  }
  return (
    <div className={style.content}>
      <div className={style.container}>
        {
          totalCount ? <div className={style.cart}>
          <div className={style.cart__top}>
            <h2 className={style.content__title}>
              Корзина
            </h2>
            <div className={style.cart__clear}>
              <span onClick={onClearCart}>Очистить корзину</span>
            </div>
          </div>
          <div className={style.content__items}>
            {
              addedSushi.map(obj => <CartItem 
                chapter={obj.chapter}
                img={obj.imageUrl}
                key={obj.id}
                id={obj.id}
                name={obj.name} 
                size={obj.size} 
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
                />)
            }
          </div>
          <div className={style.cart__bottom}>
            <div className={style.cart__bottom__details}>
              <span>
                Всего позиций: <b>{totalCount} шт.</b>{" "}
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>{" "}
              </span>
            </div>
            <div className={style.cart__bottom__buttons}>
              <Link
                to="/"
                className={style.cart_go_back_btn}
              >
                <span>Вернуться назад</span>
              </Link>
              <div onClick={onClickOreder} className={style.paybtn}>
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
        :
        <CartEmpty/>
        }
      </div>
    </div>
  );
};

export default Cart;
