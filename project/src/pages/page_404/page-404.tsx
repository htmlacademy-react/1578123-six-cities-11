import { Helmet } from "react-helmet-async";
import { Fragment } from "react";

import Logo from "../../components/logo/logo";
import styles from "./page-404.module.css";

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
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.container}>
        <h1 className={styles.error}>404 - Page not found</h1>
        {/* Link */}
      </section>
    </Fragment>
  );
}
