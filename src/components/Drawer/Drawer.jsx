import React from 'react';

import styles from './Drawer.module.scss';
import closeImg from '../../assets/img/close-50.png';

const Drawer = ({ onClose, items = [] }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.drawer}>
          <div className={styles.drawerWrapper}>
            <div className={styles.drawerHead}>
              <p>Корзина</p>
              <img onClick={onClose} src={closeImg} alt="close" />
            </div>
            <div className={styles.cartList}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
                  <p>{obj.imageUrl}</p>
                  <p>{obj.title}</p>
                  <p>{obj.price}BYN</p>
                </div>
              ))}
            </div>
            <div className={styles.totalBlock}>
              <div className={styles.total}>
                <p>Итого:</p>
                <p>87BYN</p>
              </div>
              <button>Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
