import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites/selectors';
import { getUser } from '../../store/user/selectors';
import styles from './navigation.module.css';

function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector(getUser);
  const favoritesCount = useAppSelector(getFavorites).length;

  const handleSignClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={user ? AppRoute.Favorites : AppRoute.Login}
          >
            {user ? (
              <div
                className={`header__avatar-wrapper user__avatar-wrapper ${styles.avatarWrapper}`}
                style={{ backgroundImage: `url(${user.avatarUrl})` }}
              ></div>
            ) : (
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            )}
            {user && (
              <>
                <span className="header__user-name user__name">{user.name}</span>
                <span className="header__favorite-count">{favoritesCount}</span>
              </>
            )}
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={user ? "/" : AppRoute.Login}
            onClick={(evt) => user && handleSignClick(evt)}
          >
            <span className="header__signout">Sign {user ? "out" : "in"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
