import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';
import deleteItemById from './helpers/deleteItemById';
import addItemToItems from './helpers/addItemToItems';
import getItems from './helpers/getItems';

function App() {
    const [items, setItems] = useState(getItems());
    const deleteItem = (id) => {
        const newArrayOfItems = deleteItemById(id, items);
        setItems(newArrayOfItems);
    };
    const addItem = (itemData) => {
        const newArrayOfItems = addItemToItems(itemData, items);
        setItems(newArrayOfItems);
    };
    useEffect(() => {
        if (items.length > 0) {
            localStorage.setItem('goods', JSON.stringify(items));
        } else {
            localStorage.removeItem('goods');
        }
    }, [items]);
    return (
        <div className={styles.App}>
            <Header typeOfSorting={'default'} />
            <div className={styles.MainContent}>
                <Form addItem={addItem} />
                <GoodsList items={items} deleteItem={deleteItem} />
            </div>
        </div>
    );
}

export default App;
