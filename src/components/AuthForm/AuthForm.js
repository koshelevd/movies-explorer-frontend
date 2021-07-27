import { Link } from 'react-router-dom';
import './AuthForm.css';

import logo from '../../images/header-logo.svg';

function AuthForm({
  message,
  buttonText,
  tipsText,
  linkText,
  linkUrl,
  children,
}) {
  return (
    <form className="auth-form">
      <img src={logo} alt="Логотип проекта" className="auth-form__logo" />
      <h1 className="auth-form__header">{message}</h1>
      <div className="auth-form__fields">{children}</div>
      <div className="auth-form__submit-group">
        <button className="auth__submit-button smoothly">{buttonText}</button>
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
