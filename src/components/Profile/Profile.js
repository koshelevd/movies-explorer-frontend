import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Profile.css';

function Profile() {
  useDocumentTitle('Профиль - Movie explor');
  return (
    <main className="content profile">
      <form className="profile__form">
        <h1 className="profile__header">Привет, Виталий!</h1>
        <div className="profile__info">
          <label className="profile__label">
            Имя
            <input className="profile__input" value="Виталий" disabled />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              value="pochta@yandex.ru"
              disabled
            />
          </label>
        </div>
        <div className="profile__buttons">
          <Link className="link smoothly profile__link">Редактировать</Link>
          <Link className="link smoothly profile__link profile__link_type_exit">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Profile;
