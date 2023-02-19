import React from "react";
import {Link} from 'react-router-dom';
import footerLogoImg from '../../assets/img/logo2.png';
import footerTextImg from '../../assets/img/doberman2.png';
import footerPhoneImg from '../../assets/img/phone.png';
import footerInstaImg from '../../assets/img/insta.png';
import footerVkImg from '../../assets/img/vk.png';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <><div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerText}>
                    <p>Инофрмация</p>
                    <p><Link to="/catalog">Продукция</Link></p>
                    <p><a href="#Aboutus">О нас</a></p>
                </div>
                <div className={styles.footerLogo}>

                    <a href="#"><img src={footerLogoImg} alt="logo" /></a>
                    <a href="#"><img src={footerTextImg} alt="doberman" /></a>
                </div>
                <div className={styles.footerSocial}>
                    <div id={"Contacts"} className={styles.footerSocialText}>Свяжитесь с нами:</div>
                    <div className={styles.footerSocialICon}>
                        <a href="tel:+375444882936" target="_blank" rel="noreferrer"><img src={footerPhoneImg} alt="phone" /></a>
                        <a href="https://www.instagram.com/shop.doberman/" target="_blank" rel="noreferrer"><img src={footerInstaImg} alt="insta" /></a>
                        <a href="https://vk.com/shop.doberman" target="_blank" rel="noreferrer"><img src={footerVkImg} alt="vk" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.nonshop}>Данный Интернет-сайт не является Интернет-магазином.</div></>
    )
}

export default Footer