import React, { forwardRef, useState } from 'react';

import styles from './GoodItem.module.scss';
import imagePlaceholder from './../../assets/placeholder.jpg';
import basicItemPicture from './../../assets/basicItemPicture.png';
import deleteBucket from './../../assets/deleteBucket.png';
import ItemSkeleton from './ItemSkeleton';
import formatPrice from '../../helpers/formatPrice';

interface IGoodItemComponent {
    id: string;
    itemTitle: string;
    itemDescription: string;
    pictureLink: string;
    itemPrice: number;
    deleteItem: any;
}

const GoodItem = forwardRef(
    (
        {
            id,
            itemTitle,
            itemDescription,
            pictureLink,
            itemPrice,
            deleteItem,
        }: IGoodItemComponent,
        ref: any,
    ) => {
        const [imageIsLoaded, setImageIsLoaded] = useState(false);
        const [imageSrc, setImageSrc] = useState(pictureLink);
        const onDeleteButtonClick = () => {
            deleteItem(id);
        };
        const stylesForLoaded: React.CSSProperties = {
            display: 'flex',
        };
        return (
            <div ref={ref}>
                <div
                    className={styles.GoodItem}
                    style={imageIsLoaded ? stylesForLoaded : undefined}>
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
                    <div className={styles.ItemDescription}>
                        {itemDescription}
                    </div>
                    <div className={styles.ItemPrice}>
                        {formatPrice(itemPrice.toString())} руб.
                    </div>
                    <div
                        className={styles.DeleteButton}
                        onClick={() => onDeleteButtonClick()}>
                        <img src={deleteBucket} alt='Кнопка удаления товара' />
                    </div>
                </div>
                {!imageIsLoaded && <ItemSkeleton />}
            </div>
        );
    },
);
export default GoodItem;
