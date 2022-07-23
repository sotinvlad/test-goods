import React from 'react';

import GoodItem from '../GoodItem/GoodItem';
import styles from './GoodsList.module.scss';

const GoodsList = ({ items }) => {
    return (
        <div className={styles.GoodsList}>
            {items && items.map((item) => <GoodItem key={item.id} {...item} />)}
        </div>
    );
};
export default GoodsList;
