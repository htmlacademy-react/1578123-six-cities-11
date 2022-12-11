import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearNotification } from '../../store/notifications/notifications';
import { getNotifications } from '../../store/notifications/selectors';

const DEFAULT_DURATION = 5000;

function Notification(): JSX.Element {
  const dispatch = useAppDispatch();

  const notifications = useAppSelector(getNotifications);

  const renderNotification = () => {
    notifications.forEach((notification) => {
      const toastConfig = {
        toastId: notification.id,
        autoClose: notification.duration || DEFAULT_DURATION,
        onClose: () => dispatch(clearNotification(notification.id)),
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastConfig);
          break;
        case 'success':
          toast.success(notification.message, toastConfig);
          break;
        case 'info':
          toast.info(notification.message, toastConfig);
          break;
        case 'warning':
          toast.warning(notification.message, toastConfig);
          break;
        default:
          return null;
      }
    });
  };

  return <>{renderNotification()}</>;
}

export default Notification;
