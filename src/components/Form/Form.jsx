import React, { useState } from 'react';
import inputFieldIsEmpty from '../../helpers/inputFieldIsEmpty';
import formatPrice from '../../helpers/formatPrice';
import validatePrice from '../../helpers/validatePrice';
import styles from './Form.module.scss';

const Form = ({ addItem, setShowNotification }) => {
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
    const onSubmit = () => {
        const itemData = {
            itemTitle: itemTitle,
            itemDescription: itemDescription,
            pictureLink: pictureLink,
            itemPrice: itemPrice,
        };
        addItem(itemData);
        setItemTitle('');
        setItemDescription('');
        setPictureLink('');
        setItemPrice('');
        setTouched([false, false, false]);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 1000);
    };
    return (
        <div className={styles.Form}>
            <span className={`${styles.Label} ${styles.Required}`}>
                Наименование товара
            </span>
            <div
                className={`${
                    inputFieldIsEmpty(itemTitle) && touched[0]
                        ? styles.Error
                        : ''
                }`}>
                <input
                    value={itemTitle}
                    className={`${styles.Input} ${
                        inputFieldIsEmpty(itemTitle) && touched[0]
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
                    inputFieldIsEmpty(pictureLink) && touched[1]
                        ? styles.Error
                        : ''
                }`}>
                <input
                    value={pictureLink}
                    className={`${styles.Input} ${
                        inputFieldIsEmpty(pictureLink) && touched[1]
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
                    inputFieldIsEmpty(itemPrice) && touched[2]
                        ? styles.Error
                        : ''
                }`}>
                <input
                    value={formatPrice(itemPrice)}
                    className={`${styles.Input} ${
                        inputFieldIsEmpty(itemPrice) && touched[2]
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
                    inputFieldIsEmpty(itemTitle) ||
                    inputFieldIsEmpty(pictureLink) ||
                    inputFieldIsEmpty(itemPrice)
                }
                onClick={() => onSubmit()}>
                Добавить товар
            </button>
        </div>
    );
};
export default Form;
