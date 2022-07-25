import React from 'react';
import FlipMove from 'react-flip-move';

import GoodItem from '../GoodItem/GoodItem';
import styles from './GoodsList.module.scss';
import { IGoodItem } from './../../helpers/getItems';

interface IGoodsList {
    items: IGoodItem[];
    deleteItem: any;
}

const GoodsList: React.FC<IGoodsList> = ({ items, deleteItem }) => {
    return (
        <FlipMove className={styles.GoodsList}>
            {items &&
                items.map((item) => (
                    <GoodItem key={item.id} deleteItem={deleteItem} {...item} />
                ))}
        </FlipMove>
    );
};
export default GoodsList;
