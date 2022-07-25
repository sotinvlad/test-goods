import React, { useEffect, useRef, useState } from 'react';

import getNameOfSortingFromType from '../../helpers/getNameOfSortingFromType';
import arrowDown from './../../assets/Arrow_down.png';
import styles from './Header.module.scss';

interface IHeader {
    sortingBy: string;
    setSortingBy: any;
}

const Header: React.FC<IHeader> = ({ sortingBy, setSortingBy }) => {
    const [showSortingList, setShowSortingList] = useState(false);
    const sortBlockRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        const _event = event as MouseEvent & {
            path: Node[];
        };
        if (
            sortBlockRef.current &&
            !_event.path.includes(sortBlockRef.current)
        ) {
            setShowSortingList(false);
        }
    };
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        <div className={styles.Header}>
            <div className={styles.Title}>Добавление товара</div>
            <div
                ref={sortBlockRef}
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
