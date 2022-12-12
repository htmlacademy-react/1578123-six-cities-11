import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPostFavoriteStatus } from "../../store/favorites/selectors";
import { getAuthorizationStatus } from "../../store/user/selectors";
import classNames from 'classnames';
import { AppRoute, AuthorizationStatus } from "../../const";
import { redirectToRoute } from "../../store/actions";

type BookmarksButtonProps = {
  isActive: boolean;
  size: keyof typeof sizes;
  page: 'place-card' | 'property';
  onClick: () => void;
};

const ACTIVE_CLASSNAME = '__bookmark-button--active';

const sizes = {
  small: {
    width: 18,
    height: 19,
  },
  big: {
    width: 31,
    height: 33,
  },
};

function BookmarksButton({ isActive, size, page, onClick }: BookmarksButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const AuthStatus = useAppSelector(getAuthorizationStatus);
  const { isLoading } = useAppSelector(selectPostFavoriteStatus);
  const { width, height } = sizes[size];
  const activeClassName = `${page}${ACTIVE_CLASSNAME}`;

  const handleClick = () => {
    if (AuthStatus === AuthorizationStatus.Auth) {
      onClick();
      return;
    }

    dispatch(redirectToRoute(AppRoute.Login));
  }

  return (
    <button 
      className={classNames(`${page}__bookmark-button button`, isActive && activeClassName)} 
      type="button"
      onClick={handleClick}
      disabled={isLoading}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarksButton;
