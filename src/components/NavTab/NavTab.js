import { Link } from 'react-router-dom';

import './NavTab.css';

function NavTab({ scroller, refs }) {
  console.log(refs);
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link
            to="#about-project"
            className="nav-tab__link link smoothly"
            onClick={() => scroller(refs.aboutProjectRef)}
          >
            О проекте
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link
            to="#techs"
            className="nav-tab__link link smoothly"
            onClick={() => scroller(refs.techsRef)}
          >
            Технологии
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link
            to="#about-me"
            className="nav-tab__link link smoothly"
            onClick={() => scroller(refs.aboutMeRef)}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
