import useDocumentTitle from '../../hooks/useDocumentTitle';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  useDocumentTitle('Войти - Movie explor');
  return (
    <main className="content auth">
      <AuthForm
        message="Рады видеть!"
        buttonText="Войти"
        tipsText="Еще не зарегистрированы?"
        linkText="Регистрация"
        linkUrl="/signup"
      >
        <label className="auth-form__label">
          E-mail
          <input className="auth-form__input" value="pochta@yandex.ru" />
          <span className="auth-form__validation-error">
            Что-то пошло не так
          </span>
        </label>

        <label className="auth-form__label">
          Пароль
          <input
            className="auth-form__input auth-form__input_type_error"
            value="12345678901234"
            type="password"
          />
          <span className="auth-form__validation-error">
            Что-то пошло не так
          </span>
        </label>
      </AuthForm>
    </main>
  );
}

export default Login;
