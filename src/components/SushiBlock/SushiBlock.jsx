import React from 'react';
import style from './SushiBlock.module.css'
const SushiBlock = ({id, name, imageUrl, price, onClickAddSushi, addedCount}) => {
    const onAddSushi = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
        };
        onClickAddSushi(obj)
    }

    return (
        <div className={style.sushi__block}>
            <img
                className={style.sushi__block__image}
                src={imageUrl}
                alt="Sushi"
            />
            <h4 className={style.sushi__block__title}>{name}</h4>
            <div className={style.sushi__block__bottom}>
                <div className={style.sushi__block__price}> {price} ₽</div>
                <div 
                    onClick={onAddSushi}
                    className={style.button__add}
                    >
                    <span>+</span>
                    {addedCount && <p>{addedCount}</p>}
                </div>
            </div>
        </div> 
    );
};

export default SushiBlock;