import { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Alert from '../Alert/Alert';
import { pagesWithHeader, pagesWithFooter } from '../../utils/constants';
import './Layout.css';

function Layout({ loggedIn, isMenuOpen, menuHandler, children }) {
  const [errorStatus, setErrorStatus] = useState({
    message: '',
  });
  return (
    <div
      className={`page__container ${
        isMenuOpen ? 'page__container_type_black' : ''
      } smoothly`}
    >
      <Route path={pagesWithHeader}>
        <Header
          menuHandler={menuHandler}
          isMenuOpen={isMenuOpen}
          loggedIn={loggedIn}
        />
      </Route>
      {children}
      <Route path={pagesWithFooter} component={Footer} />
      <Alert status={errorStatus} />
    </div>
  );
}

export default Layout;
