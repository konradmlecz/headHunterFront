import logo from '../../images/megaK_logo.png';

import './Login.css';

function Login() {
    return (
      <div className="login-wrapper">
          <form action="" className="login-wrapper__form">
              <img
                  src={logo}
                  alt="MegaK logo"
                  className="login-wrapper__form__logo"
              />
              <input
                  type="text"
                  placeholder="E-mail"
                  className="login-wrapper__form__input-email"
              />
              <input
                  type="password"
                  placeholder="Hasło"
                  className="login-wrapper__form__input-password"
              />
              <a
                  href=""
                  className="login-wrapper__form__link-forgot"
              >
                  Zapomniałeś hasła?
              </a>
              <div className="login-wrapper__form__bottom-form-line">
                  <p className="login-wrapper__form__register-label">
                      Nie masz konta?
                      <a href=""> Zarejestruj się</a>
                  </p>
                  <input type="submit" value="Zaloguj się" className="login-wrapper__form__submit-button"/>
              </div>
          </form>
      </div>
    );
  }
  
  export default Login;
  