import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link to="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">Статичный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link to="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">Адаптивный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link to="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">
              Одностраничное приложение
            </span>
            <span className="portfolio__link-icon">&#8599;</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
