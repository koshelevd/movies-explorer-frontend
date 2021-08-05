import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Alert from '../Alert/Alert';
import { PAGES_WITH_HEADER, PAGES_WITH_FOOTER } from '../../utils/config';
import './Layout.css';

function Layout({
  loggedIn,
  isMenuOpen,
  errorStatus,
  onMenuOpen,
  onMenuClose,
  children,
}) {
  return (
    <div
      className={`page__container ${
        isMenuOpen ? 'page__container_type_black' : ''
      } smoothly`}
    >
      <Route path={PAGES_WITH_HEADER}>
        <Header
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          isMenuOpen={isMenuOpen}
          loggedIn={loggedIn}
        />
      </Route>
      {children}
      <Route path={PAGES_WITH_FOOTER} component={Footer} />
      <Alert status={errorStatus} />
    </div>
  );
}

export default Layout;
