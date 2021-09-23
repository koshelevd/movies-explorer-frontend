import { useContext, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Profile.css';

import { PROFILE_PAGE_TITLE } from '../../utils/config';
import Preloader from '../Preloader/Preloader';

function Profile({
  onEdit,
  onSubmit,
  onLogout,
  isEdit,
  isLoading,
  errorMessage,
}) {
  const { values, inputClasses, handleChange, resetForm, isValid } =
    useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  const mainErrorClasses = `profile__validation-error form__validation-error ${
    errorMessage && 'form__validation-error_active'
  }`;

  useDocumentTitle(PROFILE_PAGE_TITLE);

  useEffect(() => {
    resetForm(currentUser, true);
  }, [currentUser, resetForm]);

  function handleEditClick(e) {
    e.preventDefault();
    onEdit();
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
  }

  function handleSave(e) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <main className="content profile">
      <form className="profile__form">
        <h1 className="profile__header">Привет, {currentUser.name}!</h1>
        <div className="profile__info">
          <label className="profile__label">
            Имя
            <input
              className={`profile__input form__input smoothly ${inputClasses.name}`}
              name="name"
              autoComplete="off"
              required
              autoFocus
              pattern="^[а-яёА-ЯЁa-zA-Z0-9\s\-]+$"
              value={values.name || ''}
              type="text"
              onChange={handleChange}
              disabled={!isEdit}
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className={`profile__input form__input smoothly ${inputClasses.email}`}
              name="email"
              autoComplete="off"
              required
              autoFocus
              pattern="^[^@]+@[^@]+\.[^@]+$"
              value={values.email || ''}
              type="email"
              onChange={handleChange}
              disabled={!isEdit}
            />
          </label>
        </div>
        <div className={`overlay ${isLoading ? 'overlay_active' : ''}`}>
          <Preloader isLoading={isLoading} />
        </div>
        <div className="profile__buttons">
          {isEdit ? (
            <>
              {' '}
              <span className={mainErrorClasses}>{errorMessage}</span>
              <button
                className="profile__button profile__button_type_submit smoothly"
                onClick={handleSave}
                disabled={
                  isLoading ||
                  !isValid ||
                  (values.name === currentUser.name &&
                    values.email === currentUser.email)
                }
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              {' '}
              <button
                className="profile__button profile__button_type_edit smoothly"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <button
                className="profile__button profile__button_type_exit smoothly"
                onClick={handleLogout}
                disabled={isLoading}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </main>
  );
}

export default Profile;
