import React from 'react';
import style from './PizzaBlock.module.css'
const PizzaBlock = ({id, name, imageUrl, price, onClickAddPizza, addedCount}) => {
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
        };
        onClickAddPizza(obj)
    }

    return (
        <div className={style.pizza__block}>
            <img
                className={style.pizza__block__image}
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className={style.pizza__block__title}>{name}</h4>
            <div className={style.pizza__block__bottom}>
                <div className={style.pizza__block__price}> {price} ₽</div>
                <div 
                    onClick={onAddPizza}
                    className={style.button__add}
                    >
                    <span>+</span>
                    {addedCount && <p>{addedCount}</p>}
                </div>
            </div>
        </div> 
    );
};

export default PizzaBlock;