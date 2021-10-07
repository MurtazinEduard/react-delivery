import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaBlockLoader} from '../../components'
import { useSelector, useDispatch} from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import style from './Home.module.css'
const categoryNames = [
  {name: 'Роллы', img: 'https://www.tanuki.ru//common/upload/Philadelphiya_1164x1164[1].jpg?width=1300&height=1300'},
  {name: 'Суши', img: 'https://static6.tanuki.ru/product/1/CnLqloffl4IFXAKoGKMnQHwLb-y5nJ3f.jpg?width=1300&height=1300'}, 
  {name: 'Супы', img: 'https://static6.tanuki.ru/product/1/hKjrPHHh7VyCw-GJqO6JJmLKOHrUzNke.jpg?width=560&height=560'}, 
  {name: 'Десерты', img: 'https://www.tanuki.ru//common/upload/AmaiMiru_1164[4].jpg?width=1300&height=1300'}, 
  {name: 'Напитки', img: 'https://static6.tanuki.ru/product/1/dhnknv1QO42nksDCqaNX1rtOrYvM5DGa.jpg?width=1300&height=1300'}
]
const sortItems = [
  {name:'популярности', type: 'popular', order:'desc'}, 
  {name:'цене', type: 'price', order:'asc'}, 
  {name:'алфавиту', type: 'name', order:'asc'},
]
const Home = () => {
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy}= useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  }
 
    return (
        <div className={style.container}>
          <div className={style.content__top}>
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
            <Categories 
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}
            />
          </div>
          <h2 className={style.content__title}>Меню:</h2>
          <div className={style.content__items}>
            {isLoaded ?
             items.map((obj) => <PizzaBlock 
              onClickAddPizza={handleAddPizzaToCart} 
              key = {obj.id} 
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}/>) 
              : Array(12).fill(0).map((_, index) => <PizzaBlockLoader key={index}/>)}
          </div>
        </div>
    );
};



export default Home;