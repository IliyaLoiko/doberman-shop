import React from 'react';
import styles from './Catalog.module.scss';

import Card from '../Carousel/Card';
import Categories from '../Catalog/Categories/Categories';

function Catalog() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://639f83de7aaf11ceb89c23fe.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={styles.Catalog}>
      <div className={styles.catalogWrapper}>
        <div className={styles.searchTab}>
          <div className={styles.searchInput}>
            <p>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Поиск'}</p>
            <input onChange={onChangeSearchInput} placeholder="Поиск..." />
          </div>
          <Categories />
        </div>
        <div className={styles.placeItems}>
          <div className={styles.headPlaceItems}>
            <div className={styles.history}>Главная{'>'}Майки</div>
            <div className={styles.sort}>Сортировать по:</div>
          </div>
          <div className={styles.cardItems}>
            {items
              .filter((item) => item.title.toLowerCase().includes(searchValue))
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onClickAdd={(obj) => onAddToCart(obj)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalog;
