import React from 'react';

import styles from './GoodItem.module.scss';

const GoodItem = ({
    id,
    itemTitle,
    itemDescription,
    pictureLink,
    itemPrice,
}) => {
    return <div className={styles.GoodItem}>GoodItem</div>;
};
export default GoodItem;
