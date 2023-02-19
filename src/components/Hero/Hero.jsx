import React from "react";
import {Link} from 'react-router-dom';
import heroImage from '../../assets/img/men.png';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroBox}>
                    <div className={styles.heroText}>
                        <h1>DoberMan</h1>
                        <p>молодой бренд одежды</p>
                        <p>основанный в Беларуси!</p>
                        <Link to="/catalog"><button className={styles.heroBtn}>Перейти в каталог</button></Link>
                    </div>
                    <div className={styles.heroImg}>
                        <img src={heroImage} alt="man" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero