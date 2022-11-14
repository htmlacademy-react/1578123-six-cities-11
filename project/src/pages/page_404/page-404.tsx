import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import styles from './page-404.module.css';
import { AppRoute } from '../../const';

export default function PageNotFound(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Six cities|Not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type='header' />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.container}>
        <h1 className={styles.error}>404 - Page not found</h1>
        <Link to={AppRoute.Root} className={styles.back}>
          To Main page
        </Link>
      </section>
    </Fragment>
  );
}
