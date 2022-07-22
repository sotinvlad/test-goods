import styles from './Form.module.scss';

const Form = () => {
    return (
        <div className={styles.Form}>
            <span className={`${styles.Label} ${styles.Required}`}>
                Наименование товара
            </span>
            <input
                className={styles.Input}
                placeholder='Введите наименование товара'
            />
            <span className={styles.Label}>Описание товара</span>
            <textarea
                className={styles.Textarea}
                placeholder='Введите описание товара'
            />
            <span className={`${styles.Label} ${styles.Required}`}>
                Ссылка на изображение товара
            </span>
            <input className={styles.Input} placeholder='Введите ссылку' />
            <span className={`${styles.Label} ${styles.Required}`}>
                Цена товара
            </span>
            <input className={styles.Input} placeholder='Введите цену' />
            <button>Добавить товар</button>
        </div>
    );
};
export default Form;
