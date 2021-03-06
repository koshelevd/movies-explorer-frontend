import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation({ onMenuOpen, onMenuClose, isMenuOpen, loggedIn }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onMenuClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, onMenuClose]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onMenuClose();
      }
    };
    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isMenuOpen, onMenuClose]);

  return loggedIn ? (
    <>
      <button
        className="navigation__burger smoothly"
        type="button"
        aria-label="Меню"
        onClick={onMenuOpen}
      ></button>
      <nav
        className={`navigation navigation_type_side ${
          isMenuOpen ? 'navigation_state_opened' : ''
        } smoothly`}
        ref={isMenuOpen ? wrapperRef : undefined}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              exact
              to="/"
              className="link smoothly"
              activeClassName="navigation__active-link"
              onClick={onMenuClose}
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/movies"
              className="link smoothly"
              activeClassName="navigation__active-link"
              onClick={onMenuClose}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/saved-movies"
              className="link smoothly"
              activeClassName="navigation__active-link"
              onClick={onMenuClose}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/profile"
              className="link smoothly"
              activeClassName="navigation__active-link"
              onClick={onMenuClose}
            >
              <span className="navigation__profile-icon smoothly">Аккаунт</span>
            </NavLink>
          </li>
        </ul>
        <button
          className="navigation__close-button smoothly"
          type="button"
          aria-label="Закрыть"
          onClick={onMenuClose}
        ></button>
      </nav>
    </>
  ) : (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item"></li>
          <li className="navigation__item">
            <Link to="/signup" className="link navigation__link smoothly">
              Регистрация
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/signin" className="link navigation__button smoothly">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
