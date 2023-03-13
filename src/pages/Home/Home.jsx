import React from 'react';
import {Categories, SortPopup, SushiBlock, SushiBlockLoader} from '../../components'
import { useSelector, useDispatch} from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchSushi } from '../../redux/actions/sushi';
import style from './Home.module.css'
const categoryNames = [
  {name: 'Роллы', img: 'https://kcdn.tanuki.ru//images/1/IOkgQAji6v7LOAQlPTuT7OjALakzNmXE.jpg?width=400&height=400'},
  {name: 'Суши', img: 'https://kcdn.tanuki.ru//images/1/f_SGWok9zP_vtbnQigt7pJEy-ouD0YZu.jpg?width=400&height=400'}, 
  {name: 'Супы', img: 'https://kcdn.tanuki.ru//images/1/FCGJqhA437hdzmSgL1xOOfOiYxE7OIWt.jpg?width=400&height=400'}, 
  {name: 'Десерты', img: 'https://kcdn.tanuki.ru//images/1/l6h5w3e01ISa45p_q5fjnDBczwRTZzhq.jpg?width=400&height=400'}, 
  {name: 'Напитки', img: 'https://kcdn.tanuki.ru//images/1/q6MiOJyIRWAFQWWqYCe6y2Dgn_ctFw83.jpg?width=400&height=400'}
]
const sortItems = [
  {name:'популярности', type: 'popular', order:'desc'}, 
  {name:'цене', type: 'price', order:'asc'}, 
  {name:'алфавиту', type: 'name', order:'asc'},
]
const Home = () => {
  const items = useSelector(({sushi}) => sushi.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({sushi}) => sushi.isLoaded);
  const {category, sortBy}= useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSushi(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddSushiToCart = (obj) => {
    dispatch({
      type: 'ADD_SUSHI_CART',
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
             items.map((obj) => <SushiBlock 
              onClickAddSushi={handleAddSushiToCart} 
              key = {obj.id} 
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
              {...obj}/>) 
              : Array(12).fill(0).map((_, index) => <SushiBlockLoader key={index}/>)}
          </div>
        </div>
    );
};



export default Home;