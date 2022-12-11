import { useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import styles from './error-screen.module.css';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => dispatch(fetchOffersAction());

  return (
    <div className={styles.wrapper}>
      <p className={styles.errorText}>Something went wrong! Please, try again</p>
      <button className={styles.replay} onClick={handleBtnClick}>
        <span className={styles.btn}>Replay</span>
      </button>
    </div>
  );
}

export default ErrorScreen;
