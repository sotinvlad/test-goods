import React, { useState } from 'react';

import styles from './GoodItem.module.scss';
import imagePlaceholder from './../../assets/placeholder.jpg';
import basicItemPicture from './../../assets/basicItemPicture.png';
import deleteBucket from './../../assets/deleteBucket.png';
import ItemSkeleton from './ItemSkeleton';
import formatPrice from '../../helpers/formatPrice';

const GoodItem = ({
    id,
    itemTitle,
    itemDescription,
    pictureLink,
    itemPrice,
    deleteItem,
}) => {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState(pictureLink);
    const onDeleteButtonClick = () => {
        deleteItem(id);
    };
    const stylesForLoaded = {
        display: 'flex',
    };
    return (
        <>
            <div
                className={styles.GoodItem}
                style={imageIsLoaded ? stylesForLoaded : null}>
                <img
                    src={imageSrc}
                    alt='Изображение товара'
                    onLoad={() => setImageIsLoaded(true)}
                    onError={() =>
                        setImageSrc(
                            imageSrc === 'basicItemPicture'
                                ? basicItemPicture
                                : imagePlaceholder,
                        )
                    }
                />
                <div className={styles.ItemTitle}>{itemTitle}</div>
                <div className={styles.ItemDescription}>{itemDescription}</div>
                <div className={styles.ItemPrice}>
                    {formatPrice(itemPrice)} руб.
                </div>
                <div
                    className={styles.DeleteButton}
                    onClick={() => onDeleteButtonClick()}>
                    <img src={deleteBucket} alt='Кнопка удаления товара' />
                </div>
            </div>
            {!imageIsLoaded && <ItemSkeleton />}
        </>
    );
};
export default GoodItem;
