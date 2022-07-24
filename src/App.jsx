import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';
import deleteItemById from './helpers/deleteItemById';
import addItemToItems from './helpers/addItemToItems';
import getItems from './helpers/getItems';
import sortItems from './helpers/sortItems';

function App() {
    const [items, setItems] = useState(getItems());
    const [sortingBy, setSortingBy] = useState('default');
    const [showNotification, setShowNotification] = useState(false);
    const deleteItem = (id) => {
        const newArrayOfItems = deleteItemById(id, items);
        setItems(sortItems(newArrayOfItems, sortingBy));
    };
    const addItem = (itemData) => {
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
    return (
        <div className={styles.App}>
            <Header sortingBy={sortingBy} setSortingBy={setSortingBy} />
            <div className={styles.MainContent}>
                <Form
                    addItem={addItem}
                    setShowNotification={setShowNotification}
                />
                <GoodsList items={items} deleteItem={deleteItem} />
            </div>
            <div
                className={styles.Notification}
                style={showNotification ? { opacity: 1 } : {}}>
                <span>Товар успешно добавлен!</span>
            </div>
        </div>
    );
}

export default App;
