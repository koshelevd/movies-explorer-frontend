import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://koshelevd.github.io/how-to-learn/"
            className="portfolio__link link smoothly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-title">Статичный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://koshelevd.github.io/russian-travel/"
            className="portfolio__link link smoothly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-title">Адаптивный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
        <a
            href="https://mesto.koshelev.net/"
            className="portfolio__link link smoothly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="portfolio__link-title">
              Одностраничное приложение
            </span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
