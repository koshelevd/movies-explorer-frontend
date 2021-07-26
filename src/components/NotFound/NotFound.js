import { Link, useHistory } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  const history = useHistory();

  return (
    <main className="content not-found">
      <article className="not-found__article">
        <h1 className="not-found__header">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </article>
      <Link
        className="link smoothly not-found__link"
        onClick={() => history.goBack()}
      >
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
