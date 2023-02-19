import React from "react";
import { Link } from 'react-router-dom';

import styles from './Carousel.module.scss';
import cardStyles from "./Card.module.scss";
import cardImage from "../../assets/img/cap.png";

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carouselTitle}>
                    <h1>Популярные товары</h1>
                </div>
                <div className={styles.productCarousel}>
                    <div className={cardStyles.card}>
                        <div className={cardStyles.cardImg}>
                            <img src={cardImage} alt="product" />
                        </div>
                        <div className={cardStyles.cardTitle}>Кепка - DoberMan Black</div>
                        <div className={cardStyles.cardPrice}>20BYN</div>
                    </div>
                    <div className={cardStyles.card}>
                        <div className={cardStyles.cardImg}>
                            <img src={cardImage} alt="product" />
                        </div>
                        <div className={cardStyles.cardTitle}>Кепка - DoberMan Black</div>
                        <div className={cardStyles.cardPrice}>20BYN</div>
                    </div>
                    <div className={cardStyles.card}>
                        <div className={cardStyles.cardImg}>
                            <img src={cardImage} alt="product" />
                        </div>
                        <div className={cardStyles.cardTitle}>Кепка - DoberMan Black</div>
                        <div className={cardStyles.cardPrice}>20BYN</div>
                    </div>
                </div>
                <div className={styles.moreBtn}>
                    <Link to="/catalog"><button>Посмотреть больше</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Carousel