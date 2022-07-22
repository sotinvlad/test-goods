import getNameOfSortingFromType from '../../helpers/getNameOfSortingFromType';
import arrowDown from './../../assets/Arrow_down.png';
import styles from './Header.module.scss';

const Header = ({ typeOfSorting }) => {
    return (
        <div className={styles.Header}>
            <div className={styles.Title}>Добавление товара</div>
            <div className={styles.SortBlock}>
                <span className={styles.TextOfSortBlock}>
                    {getNameOfSortingFromType(typeOfSorting)}
                </span>
                <img src={arrowDown} alt={'SortingArrow'}></img>
            </div>
        </div>
    );
};
export default Header;
