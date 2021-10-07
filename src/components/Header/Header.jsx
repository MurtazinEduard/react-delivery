import React from 'react';
import logo from '../../assets/img/rollLogo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Header.module.css'

const Header = () => {
    const {totalPrice, totalCount} = useSelector(({ cart }) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount,
    }));
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Link to='/'>
                    <div className={style.header__logo}>
                        <img width="98" src={logo} alt="Pizza logo" />
                        <div className={style.header__logo__title}>
                            <h1>Tasty sushi</h1>
                            <p>Design by Edward.</p>
                        </div>
                    </div>
                </Link>
                <div className={style.header__cart}>
                    <Link to='cart'>
                    <div className={style.button__cart}>
                        <span>{totalPrice} &#8381;.</span>
                        <div className={style.button__delimiter}></div>
                        <span>{totalCount}</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;