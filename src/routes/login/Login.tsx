import React, { SyntheticEvent, useState } from "react";
import logo from '../../images/megaK_logo.png';

import './Login.css';

export const Login = () => {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const submitLoginForm = async (e: SyntheticEvent) => {

        e.preventDefault();

        console.log(userEmail);
        console.log(userPassword);
    }

    return (
      <div className="login-wrapper">
          <form action="" onSubmit={submitLoginForm} className="login-wrapper__form">
              <img
                  src={logo}
                  alt="MegaK logo"
                  className="login-wrapper__form__logo"
              />
              <input
                  type="email"
                  placeholder="E-mail"
                  className="login-wrapper__form__input-email"
                  onChange={e => setUserEmail(e.target.value)}
                  required={true}
              />
              <input
                  type="password"
                  placeholder="Hasło"
                  className="login-wrapper__form__input-password"
                  onChange={e => setUserPassword(e.target.value)}
                  required={true}
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
  