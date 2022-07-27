import React from 'react';

import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';
import Notification from './components/Notification/Notification';
import useAppState from './hooks/useAppState';

const App: React.FC = () => {
    const {
        items,
        sortingBy,
        setSortingBy,
        showNotification,
        setShowNotification,
        deleteItem,
        addItem,
    } = useAppState();

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
            <Notification showNotification={showNotification} />
        </div>
    );
};

export default App;
