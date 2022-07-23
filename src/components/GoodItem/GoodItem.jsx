import React from 'react';

import styles from './GoodItem.module.scss';
import defaultImage from './../../assets/basicItemPicture.png';

const GoodItem = ({
    id,
    itemTitle,
    itemDescription,
    pictureLink,
    itemPrice,
}) => {
    return (
        <div className={styles.GoodItem}>
            <img src={pictureLink || defaultImage} alt='itemPicture' />
            <div className={styles.ItemTitle}>{itemTitle}</div>
            <div className={styles.ItemDescription}>{itemDescription}</div>
            <div className={styles.ItemPrice}>{itemPrice} руб.</div>
        </div>
    );
};
export default GoodItem;
