import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

export default function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Root} className="hader__logo-link">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
