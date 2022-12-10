import { Fragment, ReactNode } from 'react';

import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

type LayoutProps = {
  hasNavigation?: boolean;
  children: ReactNode;
};

function Layout({ children, hasNavigation = true }: LayoutProps): JSX.Element {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type="header" />
            </div>
            { hasNavigation && <Navigation /> }
          </div>
        </div>
      </header>
      {children}
    </Fragment>
  );
}

export default Layout;
