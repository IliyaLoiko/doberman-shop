import React from "react";
import aboutusImage from '../../assets/img/aboutus.jpg';
import styles from './Aboutus.module.scss';

const Aboutus = () => {
    return (
        <div id={"Aboutus"} className={styles.aboutus}>
            <div className={styles.aboutusWrapper}>
            <div className={styles.aboutusText}>
                <h1>О нас</h1>
            DoberMan - молодой бренд одежды, основанный в Беларуси.
 Это наилучшие коллекции для Вас. Они отвечают требованиям не только моды и современного стиля, но и стандартам качества.
У нас Вы найдёте всё, что Вам нужно. Ассортимент магазина формируется в зависимости от пожеланий клиентов. 
Мужская и Женская одежда из наших коллекций – это комфортная, стильная и качественная одежда на каждый день по доступным ценам.
Натуральные материалы, продуманный современный дизайн и возможность легкого сочетания моделей помогут Вам всегда оставаться в центре внимания!!!
<p>Работаем только Онлайн.</p>
            </div>
            <div className={styles.aboutusImg}>
            <img src={aboutusImage} alt="aboutus" />
            </div>
            </div>
        </div>
    )
}

export default Aboutus