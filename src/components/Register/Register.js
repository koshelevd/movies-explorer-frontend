import { Redirect } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';
import { REGISTER_PAGE_TITLE } from '../../utils/config';

function Register({ onSubmit, errorMessage, isLoading, loggedIn }) {
  const { values, inputClasses, errorClasses, handleChange, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  useDocumentTitle({ REGISTER_PAGE_TITLE });

  return loggedIn ? (
    <Redirect to="./" />
  ) : (
    <main className="content auth">
      <AuthForm
        message="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        tipsText="Уже зарегистрированы?"
        linkText="Войти"
        linkUrl="/signin"
        isValid={isValid}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isLoading={isLoading}
      >
        <label className="auth-form__label">
          Имя
          <input
            className={`auth-form__input form__input smoothly ${inputClasses.name}`}
            name="name"
            autoComplete="off"
            required
            autoFocus
            pattern="^[а-яёА-ЯЁa-zA-Z0-9\s\-]+$"
            title="Имя должно содержать только латиницу, кириллицу, пробел или дефис"
            minLength="2"
            maxLength="30"
            value={values.name}
            type="text"
            onChange={handleChange}
            disabled={isLoading}
          />
          <span
            className={`auth-form__validation-error form__validation-error ${errorClasses.name}`}
          >
            {errors.name || ''}
          </span>
        </label>

        <label className="auth-form__label">
          E-mail
          <input
            className={`auth-form__input form__input smoothly ${inputClasses.email}`}
            name="email"
            autoComplete="off"
            required
            pattern="^[^@]+@[^@]+\.[^@]+$"
            value={values.email}
            type="email"
            onChange={handleChange}
            disabled={isLoading}
          />
          <span
            className={`auth-form__validation-error form__validation-error ${errorClasses.email}`}
          >
            {errors.email || ''}
          </span>
        </label>

        <label className="auth-form__label">
          Пароль
          <input
            className={`auth-form__input form__input smoothly ${inputClasses.password}`}
            name="password"
            required
            value={values.password}
            type="password"
            onChange={handleChange}
            disabled={isLoading}
          />
          <span
            className={`auth-form__validation-error form__validation-error ${errorClasses.email}`}
          >
            {errors.password || ''}
          </span>
        </label>
      </AuthForm>
    </main>
  );
}

export default Register;
