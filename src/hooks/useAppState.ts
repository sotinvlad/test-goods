import { useState, useEffect } from 'react';

import getItems, { IGoodItem } from './../helpers/getItems';
import deleteItemById from '../helpers/deleteItemById';
import sortItems from '../helpers/sortItems';
import addItemToItems from '../helpers/addItemToItems';

const useAppState = () => {
    const [items, setItems] = useState<IGoodItem[]>(getItems());
    const [sortingBy, setSortingBy] = useState<string>('default');
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const deleteItem = (id: string): void => {
        const newArrayOfItems = deleteItemById(id, items);
        setItems(sortItems(newArrayOfItems, sortingBy));
    };

    const addItem = (itemData: IGoodItem): void => {
        const newArrayOfItems = addItemToItems(itemData, items);
        setItems(sortItems(newArrayOfItems, sortingBy));
    };

    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('goods', JSON.stringify(items));
        } else {
            localStorage.removeItem('goods');
        }
    }, [items]);
    useEffect(() => {
        setItems((items) => sortItems(items, sortingBy));
    }, [sortingBy]);

    return {
        items,
        sortingBy,
        setSortingBy,
        showNotification,
        setShowNotification,
        deleteItem,
        addItem,
    };
};

export default useAppState;
