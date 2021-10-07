import React from 'react';
import style from './SortPopup.module.css'
const SortPopup = React.memo(function SortPopup ({items, onClickSortType, activeSortType}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const sortRef = React.useRef()
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const activeLabel = items.find(obj => obj.type === activeSortType).name;
  const handleOutsideClick = (event) => {
    const path = 
    event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)){
      setVisiblePopup(false)
    }
  }
  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    
    setVisiblePopup(false)
  }
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, []);  
    return (
        <div ref={sortRef} className={style.sort}>
          <div className={style.sort__label}>
            <b>Сортировка по:</b>
            <span onClick={toggleVisiblePopup}>{activeLabel}</span>
          </div>
          {visiblePopup && <div className={style.sort__popup}>
            <ul>
              {items && 
                items.map((obj, index) => (
                  <li 
                    onClick={() => onSelectItem(obj)}
                    className={activeSortType=== obj.type ? style.active : style.non__active}
                    key = {`${obj.type}_${index}`}
                  >
                    {obj.name}
                  </li>
                ))}
            </ul>
          </div>}
        </div>
    );
});


export default SortPopup;