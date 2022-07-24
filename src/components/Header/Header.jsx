import React, { useState } from 'react';

import getNameOfSortingFromType from '../../helpers/getNameOfSortingFromType';
import arrowDown from './../../assets/Arrow_down.png';
import styles from './Header.module.scss';

const Header = ({ sortingBy, setSortingBy }) => {
    const [showSortingList, setShowSortingList] = useState(false);
    return (
        <div className={styles.Header}>
            <div className={styles.Title}>Добавление товара</div>
            <div
                className={styles.SortBlock}
                onClick={() => setShowSortingList((e) => !e)}>
                <div>
                    <span className={styles.TextOfSortBlock}>
                        {getNameOfSortingFromType(sortingBy)}
                    </span>
                    <img src={arrowDown} alt={'SortingArrow'}></img>
                </div>
                <div
                    className={styles.SelectList}
                    style={
                        showSortingList
                            ? { display: 'flex' }
                            : { display: 'none' }
                    }>
                    <div
                        className={styles.SortItem}
                        onClick={() => setSortingBy('increase')}>
                        По возрастанию
                    </div>
                    <div
                        className={styles.SortItem}
                        onClick={() => setSortingBy('decrease')}>
                        По убыванию
                    </div>
                    <div
                        className={styles.SortItem}
                        onClick={() => setSortingBy('default')}>
                        По умолчанию
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
