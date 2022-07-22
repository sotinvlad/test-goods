import styles from './App.module.scss';
import Form from './components/Form/Form';
import GoodsList from './components/GoodsList/GoodsList';
import Header from './components/Header/Header';

function App() {
    return (
        <div className={styles.App}>
            <Header typeOfSorting={'default'} />
            <Form />
            <GoodsList />
        </div>
    );
}

export default App;
