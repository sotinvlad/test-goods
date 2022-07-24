import React from 'react';

import styles from './GoodItem.module.scss';
import defaultImage from './../../assets/basicItemPicture.png';
import deleteBucket from './../../assets/deleteBucket.png';

const GoodItem = ({
    id,
    itemTitle,
    itemDescription,
    pictureLink,
    itemPrice,
    deleteItem,
}) => {
    const onDeleteButtonClick = () => {
        deleteItem(id);
    };
    return (
        <div className={styles.GoodItem}>
            <img src={pictureLink || defaultImage} alt='Изображение товара' />
            <div className={styles.ItemTitle}>{itemTitle}</div>
            <div className={styles.ItemDescription}>{itemDescription}</div>
            <div className={styles.ItemPrice}>{itemPrice} руб.</div>
            <div
                className={styles.DeleteButton}
                onClick={() => onDeleteButtonClick()}>
                <img src={deleteBucket} alt='Кнопка удаления товара' />
            </div>
        </div>
    );
};
export default GoodItem;
