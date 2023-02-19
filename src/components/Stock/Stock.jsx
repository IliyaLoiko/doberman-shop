import React from "react";
import {Link} from 'react-router-dom';
import styles from './Stock.module.scss';
import stockImage from '../../assets/img/tshorts.jpg';
const Stock = () => {
    return (
        <div className={styles.Stock}>
            <div className={styles.stockWrapper}>
                <div className={styles.stockBox}>
                    <div className={styles.stockText}>
                        <h1>Распродажа 30%</h1>
                        на все майки до конца осени!
                        <h2>промокод:</h2>
                        <p><b>ДОБЕРОСЕНЬ</b></p>
                    </div>
                    <div className={styles.stockImg}>
                        <img src={stockImage} alt="tshorts" />
                        <Link to="/catalog"><button className={styles.stockBtn}>Перейти в каталог</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock