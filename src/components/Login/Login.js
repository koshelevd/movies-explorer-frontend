import { Redirect } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import AuthForm from '../AuthForm/AuthForm';
import { LOGIN_PAGE_TITLE } from '../../utils/config';

function Login({ onSubmit, errorMessage, isLoading, loggedIn }) {
  const { values, inputClasses, errorClasses, handleChange, errors, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  useDocumentTitle(LOGIN_PAGE_TITLE);

  return loggedIn ? (
    <Redirect to="./" />
  ) : (
    <main className="content auth">
      <AuthForm
        message="Рады видеть!"
        buttonText="Войти"
        tipsText="Еще не зарегистрированы?"
        linkText="Регистрация"
        linkUrl="/signup"
        isValid={isValid}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        isLoading={isLoading}
      >
        <label className="auth-form__label">
          E-mail
          <input
            className={`auth-form__input form__input smoothly ${inputClasses.email}`}
            name="email"
            autoComplete="off"
            required
            autoFocus
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

export default Login;
