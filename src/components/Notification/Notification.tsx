import styles from './Notification.module.scss';

interface INotification {
    showNotification: boolean;
}

const Notification: React.FC<INotification> = ({ showNotification }) => {
    return (
        <div
            className={styles.Notification}
            style={showNotification ? { opacity: 1 } : {}}>
            <span>Товар успешно добавлен!</span>
        </div>
    );
};
export default Notification;
