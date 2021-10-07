import React from 'react';
import style from './Categories.module.css'
const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
    
    return (
        <div className={style.categories}>
            <div className={style.categories__item}>
                <div className={activeCategory === null ? style.active : style.nonactive} onClick={() => onClickCategory(null)}>
                    <div className={style.categories__block}>
                        <img src='https://static6.tanuki.ru/product/1/jCTojjQgE3uGAv2eRjFr7NVRfP_AdcvV.jpg?width=1300&height=1300'/>
                        <p className={activeCategory === null ? style.active : style.nonactive}>Все</p>
                    </div>
                </div>
                {items && items.map((name, index) =>
                <div 
                    className={activeCategory === index ? style.active : style.nonactive}
                    onClick={()=> onClickCategory(index)} 
                    key={`${name}_${index}`}
                >
                <div className={style.categories__block}>
                    <img src={name.img}/>
                    <p className={activeCategory === index ? style.active : style.nonactive}>{name.name}</p>
                </div>
                </div>
                )}
            </div>
        </div>
    );
});

export default Categories;