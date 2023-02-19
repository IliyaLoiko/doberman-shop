import React from "react";
import styles from './Categories.module.scss';

function Categories() {
    const categories = ['Футболки', 'Кепки', 'Тапки', 'Шнурки', 'Носки'];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((value, i) => (
                    <li onClick={() => onClickCategory(i)} className={activeIndex === i ? styles.active : styles.list}>
                        {value}</li>))}
            </ul>
        </div>
    );
}

export default Categories;