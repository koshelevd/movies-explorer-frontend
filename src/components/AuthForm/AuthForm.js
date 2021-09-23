import { Link } from 'react-router-dom';
import './AuthForm.css';

import logo from '../../images/header-logo.svg';

function AuthForm({
  message,
  buttonText,
  tipsText,
  linkText,
  linkUrl,
  isValid,
  onSubmit,
  children,
  errorMessage,
  isLoading,
}) {
  const errorClasses = `auth-form__validation-error form__validation-error ${
    errorMessage && 'form__validation-error_active'
  }`;
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <img src={logo} alt="Логотип проекта" className="auth-form__logo" />
      <h1 className="auth-form__header">{message}</h1>
      <div className="auth-form__fields">
        {children} <span className={errorClasses}>{errorMessage}</span>
      </div>
      <div className="auth-form__submit-group">
        <button
          className="auth__submit-button smoothly"
          disabled={!isValid || isLoading}
        >
          {buttonText}
        </button>
        <p className="auth-form__tips">
          {tipsText}&nbsp;
          <Link to={linkUrl} className="link smoothly auth-form__link">
            {linkText}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default AuthForm;
