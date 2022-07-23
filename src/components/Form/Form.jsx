import React, { useState } from 'react';
import fieldIsEmpty from '../../helpers/fieldIsEmpty';
import formatPrice from '../../helpers/formatPrice';
import validatePrice from '../../helpers/validatePrice';
import styles from './Form.module.scss';

const Form = () => {
    const [itemTitle, setItemTitle] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [pictureLink, setPictureLink] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [touched, setTouched] = useState([false, false, false]);
    const onInputClick = (id) => {
        let newTouched = [...touched];
        newTouched[id] = true;
        setTouched(newTouched);
    };
    return (
        <div className={styles.Form}>
            <span className={`${styles.Label} ${styles.Required}`}>
                Наименование товара
            </span>
            <div
                className={`${
                    fieldIsEmpty(itemTitle) && touched[0] ? styles.Error : ''
                }`}>
                <input
                    value={itemTitle}
                    className={`${styles.Input} ${
                        fieldIsEmpty(itemTitle) && touched[0]
                            ? styles.Error
                            : ''
                    }`}
                    placeholder='Введите наименование товара'
                    onChange={(e) => setItemTitle(e.target.value)}
                    onClick={() => onInputClick(0)}
                />
            </div>
            <span className={styles.Label}>Описание товара</span>
            <textarea
                value={itemDescription}
                className={`${styles.Textarea}`}
                placeholder='Введите описание товара'
                onChange={(e) => setItemDescription(e.target.value)}
            />
            <span className={`${styles.Label} ${styles.Required}`}>
                Ссылка на изображение товара
            </span>
            <div
                className={`${
                    fieldIsEmpty(pictureLink) && touched[1] ? styles.Error : ''
                }`}>
                <input
                    value={pictureLink}
                    className={`${styles.Input} ${
                        fieldIsEmpty(pictureLink) && touched[1]
                            ? styles.Error
                            : ''
                    }`}
                    placeholder='Введите ссылку'
                    onChange={(e) => setPictureLink(e.target.value)}
                    onClick={() => onInputClick(1)}
                />
            </div>
            <span className={`${styles.Label} ${styles.Required}`}>
                Цена товара
            </span>
            <div
                className={`${
                    fieldIsEmpty(itemPrice) && touched[2] ? styles.Error : ''
                }`}>
                <input
                    value={formatPrice(itemPrice)}
                    className={`${styles.Input} ${
                        fieldIsEmpty(itemPrice) && touched[2]
                            ? styles.Error
                            : ''
                    }`}
                    placeholder='Введите цену'
                    onChange={(e) =>
                        setItemPrice(validatePrice(e.target.value))
                    }
                    onClick={() => onInputClick(2)}
                />
            </div>
            <button
                className={styles.Button}
                disabled={
                    fieldIsEmpty(itemTitle) ||
                    fieldIsEmpty(pictureLink) ||
                    fieldIsEmpty(itemPrice)
                }>
                Добавить товар
            </button>
        </div>
    );
};
export default Form;
