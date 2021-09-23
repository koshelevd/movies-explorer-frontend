import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import logo from '../../images/header-logo.svg';
import './Header.css';

function Header({ onMenuOpen, onMenuClose, isMenuOpen, loggedIn }) {
  return (
    <header className="header section page__header">
      <Link to="/" className="header__link">
        <img
          src={logo}
          alt="Логотип проекта"
          className="header__logo smoothly"
        />
      </Link>
      <Navigation
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        isMenuOpen={isMenuOpen}
        loggedIn={loggedIn}
      />
    </header>
  );
}

export default Header;
