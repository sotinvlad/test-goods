import React from 'react';

import GoodItem from '../GoodItem/GoodItem';
import styles from './GoodsList.module.scss';

const GoodsList = ({ items, deleteItem }) => {
    return (
        <div className={styles.GoodsList}>
            {items &&
                items.map((item) => (
                    <GoodItem key={item.id} deleteItem={deleteItem} {...item} />
                ))}
        </div>
    );
};
export default GoodsList;
