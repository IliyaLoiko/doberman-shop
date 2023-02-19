import React from "react";
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoImage from '../../assets/img/logo.svg';
import logoText from '../../assets/img/doberman.png';
import cart from '../../assets/img/shopping-cart.png';

const Header = (props) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}><Link to="/">
                    <img src={logoImage} alt="logo" />
                    <img className={styles.logoText} src={logoText} alt="logo" /></Link>
                </div>
                <div className={styles['menu-wrapper']}>
                    <div className={styles['menu-item']}><Link to="/catalog"><button>ПРОДУКЦИЯ</button></Link></div>
                    <div className={styles['menu-item']}><a href="#Aboutus"><button>О НАС</button></a></div>
                    <div className={styles['menu-item']}><a href="#Contacts"><button>КОНТАКТЫ</button></a></div>
                </div>
                <div onClick={props.onClickCart} className={styles.cartBtn}>
                    <img src={cart} alt="Корзина" />
                    <div className={styles.cartText}>
                        <p>0 товаров</p>
                        <p>100BYN</p>
                    </div>
                </div>
            </div></>
    )
}

export default Header;