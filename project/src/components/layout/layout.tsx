import { Fragment, ReactNode } from 'react';

import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type="header" />
            </div>
            <Navigation />
          </div>
        </div>
      </header>
      {children}
    </Fragment>
  );
}

export default Layout;
