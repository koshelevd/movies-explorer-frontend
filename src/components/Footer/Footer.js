import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy;2021</p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li className="footer__links-item">
              <a
                href="https://praktikum.yandex.ru/"
                className="footer__link link smoothly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__links-item">
              <a
                href="https://github.com/koshelevd"
                className="footer__link link smoothly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__links-item">
              <a
                href="facebook.com/dmitri.koshelev.9"
                className="footer__link link smoothly"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
