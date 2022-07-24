import React, { useEffect, useState } from 'react';

import goods from './assets/goods.json';
import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';
import deleteItemById from './helpers/deleteItemById';

function App() {
    const [items, setItems] = useState(goods);
    const deleteItem = (id) => {
        const newArrayOfItems = deleteItemById(id, items);
        setItems(newArrayOfItems);
    };
    return (
        <div className={styles.App}>
            <Header typeOfSorting={'default'} />
            <div className={styles.MainContent}>
                <Form />
                <GoodsList items={items} deleteItem={deleteItem} />
            </div>
        </div>
    );
}

export default App;
