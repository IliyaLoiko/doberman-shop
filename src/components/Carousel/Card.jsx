import React from 'react';
import cardStyles from './Card.module.scss';

const Сard = ({ title, price, imageUrl, onClickAdd }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onClickAdd({title, price, imageUrl});
    setIsAdded(!isAdded);
  };
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardImg}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className={cardStyles.cardTitle}>{title}</div>
      <div className={cardStyles.cardPrice}>{price}BYN</div>
      <button
        onClick={onClickPlus}
        className={isAdded ? cardStyles.cardBtnChecked : cardStyles.cardBtn}>
        {isAdded ? `Удалить из корзины` : 'Добавить в корзину'}
      </button>
    </div>
  );
};
export default Сard;
