import { useState } from 'react';

import goods from './assets/goods.json';
import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';

function App() {
    const [items, setItems] = useState(goods);
    return (
        <div className={styles.App}>
            <Header typeOfSorting={'default'} />
            <div className={styles.MainContent}>
                <Form />
                <GoodsList items={items} />
            </div>
        </div>
    );
}

export default App;
